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


