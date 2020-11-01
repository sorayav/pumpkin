'use strict';



let animateLEye = "lEyeLight 5s 1 forwards cubic-bezier(.0,.85,.83,.67)";
let animateREye = "rEyeLight 5s 1 forwards cubic-bezier(.0,.85,.83,.67)";
let animateNose = "noseLight 5s 1 forwards cubic-bezier(.0,.85,.83,.67)";
let animateMouth = "mouthLight 5s  1 forwards cubic-bezier(.0,.85,.83,.67)";
let animateFilter = "filter 5s  1 forwards cubic-bezier(.0,.85,.83,.67)";
let animateOpacity = "opacity 5s 1 forwards cubic-bezier(.0,.85,.83,.67)";
let stopped = "none";
const cursorL = "url(/assets/cursorwhite.png), pointer";
const cursorD = "url(/assets/cursordarkness.png), pointer";
const pumpkin = document.querySelector('.pumpkin');

let lightOn = false;

function switchOn() {
	document.documentElement.style.setProperty("--animate-l-eye", animateLEye);
	
	document.documentElement.style.setProperty("--animate-r-eye", animateREye);
	
	document.documentElement.style.setProperty("--animate-nose", animateNose);
	
	document.documentElement.style.setProperty("--animate-mouth", animateMouth);
	
	document.documentElement.style.setProperty("--animate-filter", animateFilter);
	
	document.documentElement.style.setProperty("--animate-opacity", animateOpacity);
	
	document.documentElement.style.setProperty("--cursor", cursorD);
	
	pumpkin.style.pointerEvents = "none";
	
	return lightOn = true;
};

function switchOff() {
	document.documentElement.style.setProperty("--animate-l-eye", stopped);
	
	document.documentElement.style.setProperty("--animate-r-eye", stopped);
	
	document.documentElement.style.setProperty("--animate-nose", stopped);
	
	document.documentElement.style.setProperty("--animate-mouth", stopped);
	
	document.documentElement.style.setProperty("--animate-filter", stopped);
	
	document.documentElement.style.setProperty("--animate-opacity", stopped);
	
	document.documentElement.style.setProperty("--cursor", cursorL);
	
	pumpkin.style.pointerEvents = "auto";
	
	return lightOn = false;
};

	pumpkin.addEventListener('click', () => {
		(!lightOn) ? switchOn() : switchOff();
	});
	pumpkin.addEventListener('animationend',() => {
		pumpkin.style.pointerEvents = "auto";
	});
