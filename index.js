var intSmarties = 0;
var smarties = 'red,blue,green,orange,red,blue,orange,orange';

function mostNumberSmarties(smartieList) {
  var newSmarties = smartieList.split(',');

  var smartieMap = {};

  for (var i =0; i < newSmarties.length; i++) {
      var colors = newSmarties[i];

      if (smartieMap[colors] === undefined) {
        smartieMap[colors] = 0;
      }
      smartieMap[colors] += 1;
  }

  console.log(smartieMap);

  var mostSmarties = {};

  for (num in smartieMap) {
    if (smartieMap[num] > intSmarties) {
      mostSmarties = "Most Smarties: " +  num + ' - ' + smartieMap[num];
    }
  }

  return mostSmarties;
}

mostNumberSmarties(smarties);


var smarties = 'red,blue,green,orange,red,blue,orange,orange';
var smarties2 = 'red,blue,red,orange,red,green,orange,red,blue,orange,orange';
var smarties3 = 'red,blue,green,orange,orange,orange,blue,red,blue,orange,orange';


var sumSmarties = smarties + "," + smarties2 + "," + smarties3;

function getTheLeast(smarties) {
    var smartiesSplit = smarties.split(',');

    var colorMap = {};

    for (var i=0; i < smartiesSplit.length; i++) {
      var colors = smartiesSplit[i];

      if (colorMap[colors] === undefined) {
        colorMap[colors] = 0;
      }

      colorMap[colors] += 1;
    }

    console.log(colorMap);

    var leastColor = {};
    var leastVal = 0;

    for (color in colorMap) {
      if (leastVal < colorMap[color]) {
        leastColor = colorMap[color] + " " + color;
      }
    }

    console.log(leastColor);
}

getTheLeast(sumSmarties);
