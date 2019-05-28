"use strict";
window.onload = function () {
    window.page = {
        width: document.documentElement.clientWidth,
        burger: document.querySelector(".burger"),
        list : document.querySelector(".navigation__list"),
        links: document.querySelectorAll(".navigation__link--to-block"),
        targetBlocks: [document.querySelector(".intro"), document.querySelector(".consequence")],
        backLink: document.querySelector(".navigation__link--back")
    }
    let toggleMenu = function() {

        if (page.width <= 767) {
            if (page.list.classList.contains("navigation__list--for-system--close")) {
                page.list.classList.remove("navigation__list--for-system--close");
                page.burger.classList.add("burger--open");
            } else if (!(page.list.classList.contains("navigation__list--for-system--close"))) {
                page.list.classList.add("navigation__list--for-system--close");
                page.burger.classList.remove("burger--open");
            }
        }

        // if (page.width < 767) {
        //     if (page.list.classList.contains("navigation__list--for-system--close")) {
        //         page.list.classList.remove("navigation__list--for-system--close");
        //         page.burger.classList.add("burger--open");
        //     } else {
        //         page.list.classList.add("navigation__list--for-system--close");
        //         page.burger.classList.remove("burger--open");
        //     }
        // } else {
        //     page.list.classList.add("navigation__list--for-system--close");
        //     page.burger.classList.remove("burger--open");
        // }
    };

    page.burger.addEventListener("click", toggleMenu);



    for(let i = 0; i < page.links.length; i++) {
        page.links[i].addEventListener("click", function(event){
            event.preventDefault();
            window.scrollTo({top: page.targetBlocks[i].offsetTop - 90, behavior: "smooth"});
        })
    }

    // page.backLink.addEventListener("click", function(event){
    //     event.preventDefault();
    //     window.history.back();
    // });

    window.addEventListener("resize", function(){
        page.width = document.documentElement.clientWidth;
        console.log("resize");

        if (page.list.classList.contains("navigation__list--for-system--close")) {
            page.list.classList.add("navigation__list--for-system--close");
            page.burger.classList.remove("burger--open");
        } else {
        
            page.list.classList.remove("navigation__list--for-system--close");
            page.burger.classList.add("burger--open");
        }
    });

};



