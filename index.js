let numberOfDrumButtons=document.querySelectorAll(".drum").length;for(let e=0;e<numberOfDrumButtons;e++)document.querySelectorAll(".drum")[e].addEventListener("click",function(){let e=this.innerHTML;makeSound(e),buttonAnimation(e)});function makeSound(e){switch(e){case"w":new Audio("sounds/tom-1.mp3").play();break;case"a":new Audio("sounds/tom-2.mp3").play();break;case"s":new Audio("sounds/tom-3.mp3").play();break;case"d":new Audio("sounds/tom-4.mp3").play();break;case"j":new Audio("sounds/snare.mp3").play();break;case"k":new Audio("sounds/kick-bass.mp3").play();break;case"l":new Audio("sounds/crash.mp3").play();break;default:console.log(e)}}function buttonAnimation(e){let n=document.querySelector("."+e);n.classList.add("pressed"),setTimeout(function(){n.classList.remove("pressed")},100)}document.addEventListener("keydown",function(e){makeSound(e.key),buttonAnimation(e.key)});




// _______________________________________
//SECOND WAY OF ADDING EVENT LISTENER
//_________________________________________
// document.querySelector(".set").addEventListener("click", function(e) {
//
//   const tgt = e.target;
//
//   if (tgt.tagName === "BUTTON") {
//     this.style.color = "white";
//   }
// });

// let audio = new Audio("sounds/tom-1.mp3");
// audio.play();
