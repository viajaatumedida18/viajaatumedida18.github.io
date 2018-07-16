var imgCant = 20;
var imgUsed = [];

for (let i=0; i <= 9; i++){
	var random = randomNum();
	imgUsed.push(random);
	$("#prueba").append('<img id="img'+i+'" src="img/venezuela'+random+'.jpg">');
};



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
	var change = Math.floor(Math.random() * 9 + 1);
	imgUsed[change] = randImg;
	$('#img'+change).fadeOut("fast").attr("src","img/venezuela"+randImg+".jpg").fadeIn("fast");
	console.log(imgUsed);
	return randImg;
}

window.setInterval(changeImg,5000);
