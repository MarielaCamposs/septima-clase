var url = 'https://api.myjson.com/bins/m191n';

function setup() {
   loadJSON(url, gotData, 'json');
   canvas = createCanvas(windowWidth, windowHeight * 0.8);
   canvas.parent('top');
   canvas.position(0, 0);
   canvas.style('z-index', '-1');
   noStroke();
   noLoop();
}

function gotData(data) {
   console.log(data);
   var nombre = data.colors[77].color;
   textSize(20)
   text (nombre, width / 2, height / 2)
}

function draw() {
   background(237, 34, 93);
   fill(255);
   textAlign(CENTER);
}
