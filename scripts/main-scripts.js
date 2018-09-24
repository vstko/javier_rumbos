// JavaScript Document

/* Variables */	
window.addEventListener('resize', widthCheck);
const burgerIcon = document.getElementById("burger-icon");
burgerIcon.addEventListener("click", menuOut);
const nav = document.getElementById("nav");
const mainSection = document.getElementById("main__section");
let menuState = 0;
var socialIconsDiv = document.getElementById("social-icons");
var main = document.getElementById("main");
var heroImg = document.getElementById("hero_img");
var bodyDiv = document.getElementById("bodyd");
var presentation = document.getElementById("presentation");
const mainSectionTxt = document.getElementsByClassName("main_section_txt");
var video = document.getElementsByTagName("video");
let resized;
const vidDivs = document.getElementsByClassName("vid__div");
const socialTab = document.getElementById("social-icons-tab");
socialTab.addEventListener("mouseover", tabIn);
// socialTab.addEventListener("mouseout", tabOut)
const socialTabImg = socialTab.getElementsByClassName("social_icon_img");




/* Functions */
function tabIn(){
	socialTab.classList.add("social_tab_popout");
	socialTab.addEventListener("animationstart", function(){
		for(y=0; y<socialTabImg.length; y++){
			socialTabImg[y].classList.add("icon_opacity_anim");
		}
	})
	socialTab.addEventListener("animationend", function(){
		socialTab.classList.remove("social_tab_popout");
		for(x=0; x<socialTabImg.length; x++){
			socialTabImg[x].classList.remove("icon_opacity_anim");
		}
	})
}

function mainSectionDelay(){
	mainSection.style.transitionDelay = "0ms";
	mainSection.removeEventListener("animationend",mainSectionDelay);
	// this way i remove the delay and the event listener...
}

function presentationIntro(){
	presentation.classList.add("pres-color-change");
	presentation.addEventListener("animationend", function(){

		presentation.style.transform = "translateY(-120%)";
		onLoadAnimations();
	})
}
presentationIntro();

function onLoadAnimations(){

	heroImg.classList.add("onload__bg__img_anim");
	heroImg.addEventListener("animationend", function(){
		heroImg.classList.remove("onload__bg__img_anim");

	})

	socialTab.style.animationDelay = "400ms";
	socialTab.classList.add("social_tab_popout");
	socialTab.addEventListener("animationend", function(){
		socialTab.classList.remove("social_tab_popout");
		socialTab.style.animationDelay = "0";
		socialTabImg[0].style.opacity = "0";
		socialTabImg[1].style.opacity = "0";
		socialTabImg[2].style.opacity = "0";
		socialTabImg[3].style.opacity = "0";
	})

	mainSection.style.transitionDelay = "200ms";
	mainSection.addEventListener("transitionend", mainSectionDelay)
	mainSection.style.transform = "translateX(0)";

	for(i=0; i<mainSectionTxt.length; i++){
		mainSectionTxt[i].classList.add("appear-anim");
	}
};

function widthCheck(){
	nav.style.transition = "none";

	if( window.innerWidth < 1228 && resized == true ){
		// mainSection.style.transitionDelay = "5s";
		nav.style.visibility = "hidden";
		nav.style.transform = "translateX(120%)";
		// menuState = 1;

	} else if ( window.innerWidth > 1228 ){
		// mainSection.style.transitionDelay = "5s";
		// menuState = 0;
		nav.style.visibility = "visible";
		nav.style.transform = "translateX(0)";
		resized = true;
		console.log("got in here!");
	}
}

function menuOut() {

	nav.style.transition = "transform 300ms";

	if( menuState == 0){
		main.style.marginTop = 0;
		heroImg.style.transform = "scale(1.1)";
		nav.style.visibility = "visible";
		nav.style.transform = "translateX(0)";
		mainSection.style.transform = "translateX(-100%)";
		//body.style.backgroundColor = "#DE4E64";
		menuState = 1;		
	} else if (menuState == 1){
		if (window.innerWidth>600){
			main.style.marginTop = "30px";
		}
		heroImg.style.transform = "scale(1)";
		nav.style.transform = "translateX(120%)";
		mainSection.style.transform = "translateX(0)";
		//body.style.backgroundColor = "#2D2D2D";
		menuState = 0;
	}
	console.log(menuState);
}