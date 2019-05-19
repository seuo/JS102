function moveNext() {

    var oCurrent = document.querySelector('.current');
    oCurrent.classList.remove('current');

                                //*!not equal to
    if  (oCurrent.nextElementSibling != null) {
        oCurrent.nextElementSibling.classList.add('current');
    }else {
        oCurrent.parentNode.firstElementChild.classList.add('current');
    }

    // move to location (change dot element)

    var oLocationDot = document.querySelector('.current-dot');
        oLocationDot.classList.remove('current-dot');

        if (oLocationDot.nextElementSibling != null){
            oLocationDot.nextElementSibling.classList.add('current-dot');
        }else {
            oLocationDot.parentNode.firstElementChild.classList.add('current-dot');
        }

        var oNavDot = document.querySelector('.navDot');
        oNavDot.classList.remove('navDot');

        if (oNavDot.nextElementSibling != null){
            oNavDot.nextElementSibling.classList.add('navDot');
        }else {
            oNavDot.parentNode.firstElementChild.classList.add('navDot');
        }

}


function moveBack() {
    var oCurrent = document.querySelector('.current');
        oCurrent.classList.remove('current');

    if (oCurrent.previousElementSibling != null){
        oCurrent.previousElementSibling.classList.add('current');
    }
    else {
        oCurrent.parentNode.lastElementChild.classList.add('current');
    }

    // move to prev location (change dot element)

    var oLocationDot = document.querySelector('.current-dot');
        oLocationDot.classList.remove('current-dot');

        if (oLocationDot.previousElementSibling != null){
            oLocationDot.previousElementSibling.classList.add('current-dot');
        }else {
            oLocationDot.parentNode.lastElementChild.classList.add('current-dot');
        }

        var oNavDot = document.querySelector('.navDot');
        oNavDot.classList.remove('navDot');

        if (oNavDot.previousElementSibling != null){
            oNavDot.previousElementSibling.classList.add('navDot');
        }else {
            oNavDot.parentNode.lastElementChild.classList.add('navDot');
        }

    

}

function moveTo() {
   var oCurrent = document.querySelector('.current');
        oCurrent.classList.remove('current');

    var sTarget = this.dataset.target;
    var oTarget = document.querySelector(sTarget);
        oTarget.classList.add('current');

        //update current dot

    var oCurrentDot = document.querySelector('.current-dot');
        oCurrentDot.classList.remove('current-dot');

        this.classList.add('current-dot');
}

// function goHome() {
//     var oHome = document.querySelector('.current-dot');
//     oHome.classList.remove('current-dot');

//     var oGoHome = document.querySelector('.locationDot')
//     oGoHome.parentNode.firstElementChild.classList.add('current-dot');
    
// }

// var oHome = document.querySelector('.home');
// oHome.addEventListener('click',goHome);

    

    var oRight = document.querySelector('.fa-chevron-right');
        oRight.addEventListener('click',moveNext);

    var oLeft = document.querySelector('.fa-chevron-left')
        oLeft.addEventListener('click',moveBack);

    var oDots = document.querySelector('.dots');

    for (var i = 0; i < oDots.children.length; i++) {
        oDots.children[i].addEventListener('click',moveTo);
    }

    // for (var i = 0; i < oNav.children.length; i++) {
    //     oNav.children[i].addEventListener('click',moveTo);
    // }