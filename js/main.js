"use strict";

window.onload = function () {
    
    // (function(){
    //     let selectList = document.querySelector(".form__select");
    //     window.width = document.documentElement.clientWidth;

    //     let changeAttr = function() {

    //         window.width = document.documentElement.clientWidth;
    //         if (width >= 1024) {
    //             selectList.setAttribute("size", 8);
    //         } else {
    //             selectList.setAttribute("size", 1);
    //         }
    //     }
    //     changeAttr();
        
    //     window.addEventListener("resize", changeAttr);

    // }());

    //открываем-зыкрываем форму
    (function () {
        let buttons = document.querySelectorAll(".button--form-open");
        let buttonClose = document.querySelector(".form__button-close");
        window.form = document.querySelector(".form");
        window.formStatus = false;

        
        const setHeight = function() {
            let block = document.querySelector(".form__slider-container");
            let height = getComputedStyle(formSection.currentSlide).height;
            if (height === "auto") {
                height = "246px";
            }
            block.style.height = height;
        }
    
        let toggleForm = function () {
            setHeight();
            if(form.classList.contains("lazy-f")){
                form.classList.remove("lazy-f");
            }
            form.classList.add("form--open");
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            if (!formStatus) {
                formStatus = true;
            }
            form.querySelector(".done").style.display = "none";
        }
    
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", toggleForm);
            // buttons[i].addEventListener("click", animateForm);
        }
        
        buttonClose.addEventListener("click", function() {
            form.classList.remove("form--open");
            document.body.style.overflow = "auto";
            document.body.style.position = "relative";
            formStatus = false;
            form.querySelector(".done").style.display = "none";
        });
    }());
    
    // (function () {
    //     // let lastRadioInput = document.querySelector('label[for="enother-co"]');
    //     let lastRadioButton = document.getElementById("enother-co");
    
    //     let makeRedInput = function () {
    //         if (lastRadioButton.checked) {
    //             let inputAdd = document.querySelector(".form__clarification");
    //             inputAdd.required = "true";
    //         }
    //     }
    
    //     lastRadioButton.addEventListener("click", makeRedInput);
    // }());
    
    
    // (function(){
    //     let inputRegion = form.querySelector(".form__input--select");
    //     let selectList = form.querySelector(".form__select");
    
    
    //     let showSelect = function() {
    
    //         // if (selectList.style.display == "block") {
    //         //     selectList.style.display = "none";
    //         // }

    //         let targetWidth = 1024;
    //         selectList.style.display = "block";
    
    //         selectList.addEventListener("focus", function(event) {
    //             // event.stopPropagation();
    //             if (width >= targetWidth) {
    //                 selectList.style.display = "block";
    //             }

    //         });
    
    //         selectList.addEventListener("blur", function(event) {
    //             // event.stopPropagation();
    //             if (width >= targetWidth) {
    //                 selectList.style.display = "none";
    //             }
    //         });

    //     }
    
    //     inputRegion.addEventListener("focus", function(event){
    //         event.stopPropagation();
    //         showSelect();
    //     });
    //     inputRegion.addEventListener("input", function(event){
    //         event.stopPropagation();
    //         showSelect();
    //     });

    //     inputRegion.addEventListener("click", function(event){
    //         event.stopPropagation();
    //         showSelect();
    //     });

    //     document.body.addEventListener("click", function(event){
    //         event.stopPropagation();
    //         selectList.style.display = "none";
    //     });
    
    //     let options = selectList.querySelectorAll(".form__option");
    
    //     for (let i = 0; i< options.length; i++) {
    //         options[i].addEventListener("click", function () {

    //             width = document.documentElement.clientWidth;
    //             let targetWidth = 1024;

    //             if (width >= targetWidth) {
    //                 selectList.style.display = "none";
    //             }
    //         });
    //     }

    //     selectList.addEventListener("change", function(event){
    //         event.stopPropagation();
    //         inputRegion.value = selectList.selectedOptions[0].text;
    //     });

    //     window.addEventListener("resize", function(event) {
    //         event.stopPropagation();
    //         width = document.documentElement.clientWidth;
    //     });
        
    // }());

    (function (){
        let navigation = document.querySelector(".navigation");
    
        let startCloning = function(element) {
            let newClon = element.cloneNode(true);
            newClon.classList.add("clone-menu");
            navigation.parentElement.insertBefore(newClon, navigation);
    
            return newClon;
        };
        let clon = startCloning(navigation);
        navigation.classList.add("true-menu");
        let makeFixedMenu = function () {
    
            let currentScroll =  window.pageYOffset || document.documentElement.scrollTop;
            let headerAdd = document.querySelector(".header-add");
            let targetScroll = headerAdd.offsetHeight;
    
            if (currentScroll >= targetScroll) {
            clon.classList.add("clone-menu--active");
            } else {
                clon.classList.remove("clone-menu--active");
            }
    
        }
    
        window.addEventListener("scroll", makeFixedMenu);
    }());

    
    (function(){
        
        $(".page-header").on('click', '.navigation__link--to', function (event) {
            // event.preventDefault();
            var txt = "#" + $(this).data("scroll");
            txt += "-slide";
            $('html, body').animate({
                scrollTop: $(txt).offset().top - 70
            }, 500);
        });
    }());

    (function(){
        let mobileWidth = 767;
        let screenWidth = document.documentElement.clientWidth;
        
        if (screenWidth <= screenWidth) {
            let burger =  document.querySelector(".true-menu").querySelector(".burger");
            let clonBurger =  document.querySelector(".clone-menu").querySelector(".burger");
        
         
            burger.addEventListener("click", function() {
                burger.classList.toggle("burger--open");
                clonBurger.classList.toggle("burger--open");
        
                let list = document.querySelector(".true-menu").querySelector(".navigation__list");
                list.classList.toggle("navigation__list--active");
            });
        
            clonBurger.addEventListener("click", function() {
                burger.classList.toggle("burger--open");
                clonBurger.classList.toggle("burger--open");
        
                let list = document.querySelector(".true-menu").querySelector(".navigation__list");
                list.classList.toggle("navigation__list--active");
            });
        
            window.addEventListener("scroll", function() {
                let cloneMenu = document.querySelector(".clone-menu");
                let list = document.querySelector(".true-menu").querySelector(".navigation__list");
        
                if (cloneMenu.classList.contains("clone-menu--active")) {
                    
                    list.classList.add("navigation__list--fixed");
                } else {
                    list.classList.remove("navigation__list--fixed");
                }
            });
        }
    }());

    (function(){
        let toggleContainer = function () {
        let width = document.documentElement.clientWidth;
        let targetWidth = 767;
        let navs = document.querySelectorAll(".navigation");
    
        if (width <= targetWidth) {
    
            for (let i =0; i < navs.length; i++) {
                let container = navs[i].firstElementChild;
                container.classList.remove("container");
            }
        } else {
    
            for (let i =0; i < navs.length; i++) {
                let container = navs[i].firstElementChild;
                container.classList.add("container");
            }
        }
    };
    
    window.addEventListener("load", toggleContainer);
    window.addEventListener("resize", toggleContainer);
}());

(function(){
    
    const activeForm = (function() {
        window.formSection = {
            main: document.getElementById("page-form"),
            buttonNext: document.querySelector(".form__button-slide--next"),
            buttonPrev: document.querySelector(".form__button-slide--prev"),
            sliders: document.querySelectorAll(".form__slide"),
      
            currentSlideIndex: 0,
            currentSlide: document.querySelector("li.active"),
      
            quantityOfMove: 0,
            addQuantity: 0,
      
            minIndex: 0,
            maxIndex: 2,
            buttonSubmit: document.querySelector(".form__button--submit")
          };
      
        formSection.currentSlide = formSection.sliders[formSection.currentSlideIndex];
      
        const setCurrentSlide = function() {
          formSection.currentSlide =formSection.sliders[formSection.currentSlideIndex];
          formSection.currentSlide.classList.add("active");
        };
      
        const setAddQuantity = function() {
          formSection.addQuantity = 100/formSection.sliders.length;
        };
      
        const moveNext = function() {
            setAddQuantity();
      
            formSection.quantityOfMove += formSection.addQuantity;
            let container = document.querySelector(".form__slider-container");
            container.style.transform = "translateX(-" + formSection.quantityOfMove + "%)";
        };
        const movePrev = function() {
            setAddQuantity();
      
            formSection.quantityOfMove -= formSection.addQuantity;
            let container = document.querySelector(".form__slider-container");
            container.style.transform = "translateX(-" + formSection.quantityOfMove + "%)";
          };
      
      
        const controlTheButtons = function () {
            //работаем с кнопкой назад
            if (formSection.currentSlideIndex > formSection.minIndex) {
                formSection.buttonPrev.classList.remove("form__button-hidden");
            } else {
                formSection.buttonPrev.classList.add("form__button-hidden");
            }
            //работаем с кнопкой вперед
      
            if (formSection.currentSlideIndex === formSection.maxIndex) {
                formSection.buttonNext.classList.add("form__button-hidden");
            } else {
                formSection.buttonNext.classList.remove("form__button-hidden");
            }
        };
      
        const checkCurrentSlide = function(slide) {
            let requiredInputs = slide.querySelectorAll(".important");
      
            //создаем пустой массив для пустых инпутов и каждый пустой добавляем в массив, если все заполненны, то проверка принимает положительный статус и текущий слайд сменается на следующий, иначе добавляется крассный цвет инпутам
      
            let emptyInputs = [];
            let status = true;
            for (let i = 0; i < requiredInputs.length; i++) {
                if (!requiredInputs[i].value) {
                    requiredInputs[i].classList.add("red");
                    emptyInputs.push(requiredInputs[i]);
                } else {
                    requiredInputs[i].classList.remove("red");
                }
            }
      // проверяем наличие у слайда радиокнопок, если какая-нить чекнута, значит все в порядке и слайд может ехать дальше
            // let radios = slide.querySelectorAll(".radio");
            // let radiosStatus = true;
            // if (radios.length > 0 && formSection.currentSlideIndex < 2) {
            //     radiosStatus = false;
            //     for (let i =0; i < radios.length; i++ ) {
            //         if (radios[i].checked) {
            //             let labelsOfRadios = formSection.main.querySelectorAll(".form__label-radio");
            //             for (let i = 0; i < labelsOfRadios.length; i++) {
            //                 labelsOfRadios[i].style.color = "#000";
            //             }
            //             radiosStatus = true;
            //             break;
            //         } else {
                        
            //             let id = radios[i].id;
            //             let selector = "label[for='" + id + "']";
            //             document.querySelector(selector).style.color = "red";
            //         }
            //     }
            // }
      
            // if (emptyInputs.length > 0 || radiosStatus === false) {
            //     status = false;
            // }

            if (emptyInputs.length > 0) {
                status = false;
            }
            return status;
        };

        const highLit = function(){
            let rounds = document.querySelectorAll(".form__pagination-round");
            for (let i = 0; i < rounds.length; i++) {
                rounds[i].classList.remove("form__pagination-round--active");
            }

            for(let i = 0; i <= formSection.currentSlideIndex; i++){
                rounds[i].classList.add("form__pagination-round--active");
            }

            // подсвечиваем линии между кнопками 
            if (formSection.currentSlideIndex > 0) {   
                document.querySelector(".form__pagination-line-1").classList.add("form__pagination-line--active");

                if(formSection.currentSlideIndex > 1) {
                    document.querySelector(".form__pagination-line-2").classList.add("form__pagination-line--active");
                } else{
                    document.querySelector(".form__pagination-line-2").classList.remove("form__pagination-line--active");
                }
            } else {
                document.querySelector(".form__pagination-line-1").classList.remove("form__pagination-line--active");
            }
        }

        const toggleButtonSubmit = function() {
            if (formSection.currentSlideIndex === 2) {
                formSection.buttonSubmit.classList.remove("form__button-hidden");
            } else {
                formSection.buttonSubmit.classList.add("form__button-hidden");
            }
        }

        const checkValidMail = function() {
            let mailInput = formSection.main.querySelector("input[name='email']");
            let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            let result;

            if (mailInput.value == false || !mailInput.validity.valid || pattern.test(mailInput.value) == false) {
                mailInput.classList.add("red");
                formSection.main.querySelector(".error-alert").classList.add("error-alert-active");

                setTimeout(function(){
                    formSection.main.querySelector(".error-alert").classList.remove("error-alert-active");
                }, 1000);
                result = false;
            } else {
                mailInput.classList.remove("red");
                formSection.main.querySelector(".error-alert").classList.remove("error-alert-active");
                result = true;
            }

            return result;
        }

        const setHeight = function() {
            let block = document.querySelector(".form__slider-container");
            let height = getComputedStyle(formSection.currentSlide).height;
            block.style.height = height;
        }
        setHeight();
    
        // клик по кнопке вперед
        formSection.buttonNext.addEventListener("click", function(event){
            event.preventDefault();
            if (window.width < 1024) {
                window.form.scrollTo(0, 0);
            }
            setCurrentSlide();
            let checkStatus = checkCurrentSlide(formSection.currentSlide);
            let checkMailInput = checkValidMail();
      
            if (checkStatus && checkMailInput) {
                formSection.currentSlideIndex++;
                formSection.currentSlide.classList.remove("active");
                setCurrentSlide();
                // highLit();
                setHeight();
                toggleButtonSubmit();
      
                moveNext();
                controlTheButtons();
            }
        });
        // клик по кнопке назад 
        formSection.buttonPrev.addEventListener("click", function(event){
            event.preventDefault();

            if (window.width < 1024) {
                window.form.scrollTo(0, 0);
            }
            setCurrentSlide();
            let checkStatus = true;


            if (checkStatus) {
                formSection.currentSlideIndex--;
                formSection.currentSlide.classList.remove("active");
                setCurrentSlide();
                // highLit();
                setHeight();
                toggleButtonSubmit();
      
                movePrev();
                controlTheButtons();
            }
        });

        // отмена отправки данных формы по ентер 
        window.addEventListener("keydown", function(event){
            if (event.keyCode == 13) {
                if (window.width < 1024) {
                    window.form.scrollTo(0, 0);
                }
                setCurrentSlide();
                let checkStatus = checkCurrentSlide(formSection.currentSlide);
                let checkMailInput = checkValidMail();

          
                if (checkStatus && checkMailInput && formSection.currentSlideIndex != 2) {
                    event.preventDefault();
                    formSection.currentSlideIndex++;
                    formSection.currentSlide.classList.remove("active");
                    setCurrentSlide();
                    // highLit();
                    setHeight();
                    toggleButtonSubmit();
          
                    moveNext();
                    controlTheButtons();
                } else if (checkStatus && checkMailInput && formSection.currentSlideIndex == 2){
                    $( ".page-form" ).submit();
                }
                
            }
        });
      
      
        // берем лабелы радиосов и при клике убираем окрашивание всем
          let labelsOfRadios = formSection.main.querySelectorAll(".form__label-radio");
          for (let i = 0; i < labelsOfRadios.length; i++) {
              labelsOfRadios[i].addEventListener("click", function(){
                 for (let i = 0; i < labelsOfRadios.length; i++) {
                     labelsOfRadios[i].style.color ="#000";
                 }
              });
          }
      
      }());

      window.addEventListener("resize", function() {
          window.width = document.documentElement.clientWidth;
      });
}());


// (function(){
    
//     // let changeAttr2 = function() {

//     //     window.width = document.documentElement.clientWidth;
//     //     if (width >= 1024) {
//     //         form.querySelector(".form__select--slide3").setAttribute("size", 5);
//     //     } else {
//     //         form.querySelector(".form__select--slide3").setAttribute("size", 1);
//     //     }
//     // }
//     // changeAttr2();
    
//     // window.addEventListener("resize", changeAttr2);

// }());

// (function(){

//     let inputRegion = form.querySelector(".form__input--select--slide3");
//     let selectList = form.querySelector(".form__select--slide3");

//     inputRegion.addEventListener("click", function(){ 
//         let targetWidth = 1024;
//         selectList.style.display = "block";

//         selectList.addEventListener("focus", function() {
//             if (width >= targetWidth) {
//                 selectList.style.display = "block";
//             }
//         });

//         selectList.addEventListener("blur", function() {
            
//             if (width >= targetWidth) {
//                 selectList.style.display = "none";
//             }
//         });
//     });

//     let options = selectList.querySelectorAll(".form__option");
    
//     for (let i = 0; i< options.length; i++) {
//         options[i].addEventListener("click", function (event) {
//             event.preventDefault();
//             let valueInput = options[i].text;
//             inputRegion.value = valueInput;

//             width = document.documentElement.clientWidth;
//             let targetWidth = 1024;

//             if (width>= targetWidth) {
//                 selectList.style.display = "none";
//             }
//         });
//     }

//     window.addEventListener("resize", function() {
//         width = document.documentElement.clientWidth;
//     });
// }());

//клик по первой кнопке Другое в форме делает активным инпут, клик на иные делает его обратно дизабледным
(function(){

    let label = formSection.main.querySelector("label[for='enother-co']");
    let input = formSection.main.querySelector("input[name='clarification']");

    label.addEventListener("click", function() {
        if (input.hasAttribute("disabled")){
            input.removeAttribute("disabled");
        }
    });

    let enotherLabels = [document.querySelector("label[for='saling-company']"), document.querySelector("label[for='proizvod']")];
    for (let i =0; i < enotherLabels.length; i++) {
        enotherLabels[i].addEventListener("click", function(){
            input.value="";
            input.setAttribute("disabled", true);
        });
    }
}());

(function(){
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
}());
};

let lazyLoad = (function(){
    registerListener('load', setLazy);
    registerListener('load', lazyLoad);
    registerListener('scroll', lazyLoad);

    var lazy = [];

    function setLazy(){
        lazy = document.getElementsByClassName('lazy');
    } 

    function lazyLoad(){
        for(var i=0; i<lazy.length; i++){
            if(isInViewport(lazy[i])){
                if (lazy[i].getAttribute('data-src')){
                    lazy[i].src = lazy[i].getAttribute('data-src');
                    lazy[i].removeAttribute('data-src');
                }
                lazy[i].classList.remove("lazy");
            }
        }
        
        cleanLazy();
    }

    function cleanLazy(){
        lazy = Array.prototype.filter.call(lazy, function(l){ return l.getAttribute('data-src');});
    }

    function isInViewport(el){
        var rect = el.getBoundingClientRect();
        
        return (
            rect.bottom >= 0 && 
            rect.right >= 0 && 
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function registerListener(event, func) {
        if (window.addEventListener) {
            window.addEventListener(event, func)
        } else {
            window.attachEvent('on' + event, func)
        }
    }
}());

//custom select
(function($){
    $('#select').customSelect({
        search: true,
    });
}(jQuery));

//AJAX
(function ($) {
jQuery(document).ready(function ($) {
    $("#page-form").submit(function (e) {
        //e.preventDefault();
        var par = $(this);
        if (!validateForm(par)) {
            return false;
        }
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "send.php",
            data: form_data,
            success: function () {
                //document.location.href = "https://forsite.su/thankyou.htm";
                $(".done").css({"display":"flex"});
            }
        });
        return false;
    });
});
function validateForm(par) {
    var isValidate = true;
    par.find(".important").each(function () {
        if (!$(this).val()) {
            isValidate = false;
            $(this).addClass("red");
        } else {
            $(this).removeClass("red");
        }
    });
    /*par.find(".valid_check").each(function () {
        if (!$(this).prop('checked')) {
            isValidate = false;
            $(this).parent().addClass("novalidate");
        } else {
            $(this).parent().removeClass("novalidate");
        }
    });*/

    return isValidate;
}
})(jQuery);