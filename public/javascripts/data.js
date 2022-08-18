let date = new Date();
let nowDate = date.getDate();
let moment = require('moment');
console.log(moment().format("MMMM Do, YYYY"));

class Person{
	constructor(name, age, friends) {
		this.name = name;
		this.age = age;
		this.friends = friends;
	}
	getFriends(){
		console.log("you currently have...");
		if(this.friends <1){
			console.log(this.friends + " - Friends. Jeez");
		}
	}
		}


function getMill(days){
	let timeNum = days * 24 * 60 * 60 * 1000;
	return timeNum;
}

function setDate(){
	let seeDate = new Date();
	let checkDate = new Date();
	checkDate.setDate(seeDate.getDate() + 14);
	console.log(checkDate);
	seeDate.setDate(seeDate.getDate() + 14);
	console.log(seeDate);

	// if(seeDate.toLocaleDateString === checkDate.toLocaleDateString){
	// 	console.log(seeDate);
	// }
	// else{
	// 	console.log("wrong");
	// }
	
}


function getNumber(maximum, minimum){
	let option = Math.round(Math.random() * (maximum - minimum + 1),0);
	return option;
}

console.log(getNumber(90,0))