
function moveNext(){ 
    var oCurrent = document.querySelector('.current');
    oCurrent.classList.remove('current');

    if (oCurrent.nextElementSibling != null){
        oCurrent.nextElementSibling.classList.add('current');
    }

    else {
        oCurrent.parentNode.firstElementChild.className = 'current';
    }

}

function movePrev(){ 
    var oCurrent = document.querySelector('.current');
    oCurrent.classList.remove('current');

    if (oCurrent.previousElementSibling != null){
        oCurrent.previousElementSibling.classList.add('current');
    }

    else {
        oCurrent.parentNode.lastElementChild.className = 'current';
    }

}

var oRight = document.querySelector('.fa-chevron-right');
oRight.addEventListener('click',moveNext);


var oLeft = document.querySelector('.fa-chevron-left');
oLeft.addEventListener('click',movePrev);

setInterval(moveNext,3000);


