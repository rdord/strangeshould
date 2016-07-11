var bodyPartData
var moodData

function preload () {
  bodyPartData = loadJSON('inc/bodyParts.json')
  moodData = loadJSON('inc/moods.json')
}

function getManyData (arrayIn, howMuch) {
  var availibleItems = arrayIn.length
  var arrayOut = []

  for (var i = 0; i < howMuch; i++) 
    arrayOut.push(arrayIn[round(random(availibleItems))])

  return arrayOut
}

function specialConcat (array1, array2) {
  var arrayOut = []

  for (var i = 0; i < array1.length; i++) {
    arrayOut.push(array1[i])
    arrayOut.push(array2[i])
  }

  return arrayOut
}



function setup () {
  noCanvas()
  var howMuch = 1000
  var moods = getManyData(moodData.moods, howMuch)
  var bodyParts = getManyData(bodyPartData.bodyParts, howMuch)
  var moodyParts = specialConcat(moods, bodyParts).join(' ')

  // console.log(moods)
  // console.log(bodyParts)
  console.log(moodyParts)

  var parentDiv = document.getElementById('InnerMouth')
  var p = createP(moodyParts)
  p.parent(parentDiv)


  noLoop()
}
