"use strict";

let button = document.querySelectorAll(".for-whom__add-button");

let getHeight = function (parent) {
    let height = getComputedStyle(parent).height;
    let numericHeight = height.substr(0, (height.length - 2));
    return Number(numericHeight);
}

for (let i = 0; i < button.length; i++) {

    button[i].addEventListener("click", function() {
        
        let parent = button[i].parentElement;
        parent.style.transition = "0.3s";

        let currentText = button[i].innerText;
        let closeText = "Скрыть";
        let addText = parent.querySelector(".for-whom__text--hover");

        let startParentHeight = getHeight(parent); //string
        let addText_height = addText.offsetHeight; //number

        console.log(startParentHeight);
        console.log(addText_height);


        if (currentText === closeText) { //hide text
            parent.style.height = (startParentHeight - addText_height) + "px"; 

            button[i].innerText = "Подробнее";
            // parent.classList.remove("");
            addText.classList.remove("test");
            
        } else { //open text
            parent.style.height = (startParentHeight + addText_height) + "px"; 

            button[i].innerText = closeText;
            // parent.classList.add("");
            addText.classList.add("test");
        }
    });
}

window.addEventListener("resize", function() {

    for (let i = 0; i < button.length; i++) {
       
        let parent = button[i].parentElement;
        let addText = parent.querySelector(".for-whom__text--hover");

        // if (addText.classList.contains("test")) {
            
        //     addText.classList.remove("test");
        //     // let startParentHeight = getHeight(parent);
        //     // let addText_height = addText.offsetHeight;
        //     // parent.style.height = (startParentHeight - addText_height) + "px"; 
        // }

        parent.style.height = "auto";
    }

});

