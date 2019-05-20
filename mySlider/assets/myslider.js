function moveNext() {

    var oCurrent = document.querySelector('.current');
    oCurrent.classList.remove('current');

                                //*!not equal to
    if  (oCurrent.nextElementSibling != null) {
        oCurrent.nextElementSibling.classList.add('current');
    }else {
        oCurrent.parentNode.firstChildElement.classList.add('current');
    }

    // move to location (change dot element)

    var oLocationDot = document.querySelector('.locationDot');
        oLocationDot.classList.remove('locationDot');

        if (oLocationDot.nextElementSibling != null){
            oLocationDot.nextElementSibling.classList.add('locationDot');
        }else {
            oLocationDot.parentNode.firstChildElement.classList.add('locationDot');
        }

}


function moveBack() {
    var oCurrent = document.querySelector('.current');
        oCurrent.classList.remove('current');

    if (oCurrent.previousElementSibling != null){
        oCurrent.previousElementSibling.classList.add('current');
    }
    else {
        oCurrent.parentNode.lastChildElement.classList.remove('current');
    }

    // move to prev location (change dot element)

    var oLocationDot = document.querySelector('.locationDot');
        oLocationDot.classList.remove('locationDot');

        if (oLocationDot.previousElementSibling != null){
            oLocationDot.previousElementSibling.classList.add('locationDot');
        }else {
            oLocationDot.parentNode.prevElementSibling.classList.remove('locationDot');
        }

}

function moveTo() {
   var oCurrent = document.querySelector('.current');
        oCurrent.classList.remove('current');

    var sTarget = this.dataset.target;
    var oTarget = document.querySelector(sTarget);
        oTarget.classList.add('current');

        //update current dot

    var oCurrentDot = document.querySelector('.locationDot');
        oCurrentDot.classList.remove('locationDot');

        this.classList.add('locationDot');
}

    var oRight = document.querySelector('.fa-chevron-circle-right');
        oRight.addEventListener('click',moveNext);

    var oLeft = document.querySelector('.fa-chevron-circle-left')
        oLeft.addEventListener('click',moveBack);

    var oDots = document.querySelector('.dots');

    for (var i = 0; i < oDots.children.length; i++) {
        oDots.children[i].addEventListener('click',moveTo);
    }