let moment = require('moment');
console.log(moment().add(14).format("MMMM Do, YYYY"));
let nowDate = new Date();
const changeDate = moment(nowDate).add(14, 'd').format("MMMM Do, YYYY");

console.log(changeDate);
console.log(moment().diff(changeDate, moment()));
function getMill(days){
	let timeNum = days * 24 * 60 * 60 * 1000;
	return timeNum;
}

function setDate(){

	let checkDate = new Date();
	checkDate.setDate(checkDate.getDate() + 14);
}


function getNumber(maximum, minimum){
	let option = Math.round(Math.random() * (maximum - minimum + 1),0);
	return option;
}

console.log(getNumber(90,0))