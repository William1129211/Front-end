
var Health = 100;
//this links to our backend
var cur_pollution = 200;
var travel_cnt = 0;
var failed_chance;

function Hunt(){
	//cur_pollution =
	//calc chance of failure
	failed_chance = (Math.random()*100000)%100-10;

	if((Math.random()*10000)%100 >= failed_chance){
		document.getElementById("log").innerHTML = "You stopped and hunt some worms (+5 Health)";
		Health = Health + 5;
		Display_bird(1);
		return;
	}
	//take more damage if failed
	document.getElementById("log").innerHTML = "Heavy smog blocks your site. You can hardly breathe...";
	Health = Health - cur_pollution/10;
	if(Health <= 0){
		Defeat();
		return;
	}
	Display_bird(0);
	return;
}

function Travel(){
	failed_chance = (Math.random()*100000)%100-30;

	if((Math.random()*10000)%100 >= failed_chance){
		travel_cnt ++; 
		document.getElementById("log").innerHTML = "You flew a while before you rest (+1 Progress)";
		Display_bird(0);
		//lose health here?
		if(travel_cnt == 10){
			Success();
			return;
		}
		return;
	}
	//sub this with data
	document.getElementById("log").innerHTML = "Smogs are too heavy and you crashed on a tree!";
	Health = Health - cur_pollution/10;
	if(Health <= 0){
		Defeat();
		return;
	}
	Display_bird(0);
	return;
}

function Defeat(){
	//jump to defeat.html?
}

function Success(){
	
	//jump to success.html?
}

function Display_bird(state){
	//changes health and 
	document.getElementById("health").innerHTML = Health;
	if (state == 1){ //eat
		document.getElementById('birdpic').src='bird_eat.png';
	}
	else if (state == 2){ //win
		document.getElementById('birdpic').src='bird_win.png';
		return;
	}
	else if (Health > 75){
		document.getElementById('birdpic').src='bird_start.png';
	} 
	else if (Health > 50){
		document.getElementById('birdpic').src='bird_hurt.png';
	}
	else {
		document.getElementById('birdpic').src='bird_dying.png';
	}
	return;
}