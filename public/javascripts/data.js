let moment = require('moment');
let nowDate = new Date();
const changeDate = moment(nowDate).add(14, 'd').format("MMMM Do, YYYY");

// Get a list
// set the maximum option # to the list total.
// use the rng to pick an option.
// 

function optionPick(maximum, minimum){
	let option = Math.round(Math.random() * (maximum - minimum + 1),0);
	return option;
}

function newDate(){

	
}
let counts = setInterval(function(){
	// Set the date we're counting down to
let countDate = moment("Aug 28, 2022");


// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

})
