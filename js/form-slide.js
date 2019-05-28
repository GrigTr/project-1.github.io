"use strict";


            window.formInfo = {
                formStatus: window.formStatus,
                slideContainer: document.querySelector(".form").querySelector(".form__slider-container"),
                sliders: document.querySelector(".form").querySelectorAll(".form__slide"),
                buttonNext: document.querySelector(".form").querySelector(".form__button-slide--next"),
                buttonPrev: document.querySelector(".form").querySelector(".form__button-slide--prev"),
                addQuantity: 0
            }


            let moveNext = function() {
                if (window.formStatus) {
                    
                    formInfo.addQuantity = ((100/ formInfo.sliders.length)) + "%";
                }
            }

            formInfo.buttonNext.addEventListener("click", moveNext);
