


function gimmeDate(){
	var currentDate = new Date(Date.now());
	
	window.alert("Current date: " + currentDate.getDate() + "."  + (parseInt(currentDate.getMonth())+1) + "." + currentDate.getFullYear() + "r.");
}
