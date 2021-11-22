$("h1").after("<button>New</button>");

$("body").on("mouseover",function(){
  $("h1").css("color", "red");
})




var color1 = [
  "green",
  "blue",
]

var color2 = [
  "green",
  "blu",
]

function arraysMatch (arr1, arr2) {

	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;

	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	// Otherwise, return true
	return true;

};

if (arraysMatch (color1,color2) === true) {
  console.log ("truee")}
else {
  console.log ("falsee")
}





$(".btn").click (function () {

var randomColor = "red";
var randomColor2 = "reds  ";

  if(this.id === randomColor || this.id === randomColor2 ) {
console.log("true")}
else {
console.log("false")
}
})
