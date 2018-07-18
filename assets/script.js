var imgCant = 20;
var imgUsed = [2,3,5,1,22,8,10,6,11,21,23];

// for (let i=0; i <= 9; i++){
// 	var random = randomNum();
// 	imgUsed.push(random);
// 	$("#prueba").append('<img id="img'+i+'" src="img/venezuela'+random+'.jpg">');
// };



function randomNum() {
    var rand = Math.floor(Math.random() * imgCant + 1);
    if($.inArray(rand,imgUsed) !== -1){
    	return randomNum();
	}
	else {
		return rand;
	}
}

function changeImg(){
	var randImg = randomNum();
	var change = Math.floor(Math.random() * 10 + 1);
	imgUsed[change] = randImg;
	$('#img'+change).fadeOut("fast").attr("src","img/venezuela"+randImg+".jpg").fadeIn("fast");
	console.log(imgUsed);
	return randImg;
}

window.setInterval(changeImg,3000);
