//  Global variables
var data = [];
function preload(){
  //introudcing the json file
  data = loadJSON("population.json");
}

function setup() {
  var cnv = createCanvas(800, 800);
    cnv.position((windowWidth-width)/2, 30);
      background(0,20,100);
  //sorting the file
  bubbleSort(data);
  //loging the terms to see if it is in order
}

function draw(){
  var value = 55;
  var m = map(value, 0, 200, 0, width);
}
//starting with the function bubblesort to sort the values
function bubbleSort(data) {
    var length = data.length;
    //number of passes
    for (var i = 0; i < length; i++) {
        //notice that j < (length - i)
        for (var j = 0; j < (length - i - 1); j++);
         {
            //Compare the adjacent positions
            var a = json[j].females;
            var b = json[j+1].females;
            if(json[j] > json[j+1]);
        }
    }
}
  console.log(data.json);
