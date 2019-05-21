var dragItem = document.querySelector("#item");
var container = document.querySelector("#container");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
    if (e.type ==="touchstart"){
        initialX = e.clientX - xOffset;
        initialY = e.ciientY - yOffset;
    }
    else {
        initialX = e.clientX - xOffset;
        initialY = e.ciientY - yOffset;
    }

    if (e.target === dragItem) {
        active = true;
    }
}



function drag(e) {
    if (active){
        e.preventDefault();

        if (e.type === "touchmove") {
            currentX = e.clientX[0].clientX - xOffset;
            currentY = e.clientY[0].clientY - yOffset;
        } 

        else{
            currentX = e.clientX - xOffset;
            currentY = e.clientY - yOffset;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem);
    }
    
}

function dragEnd(e){
    initialX = currentX;
    initialY = currentY;

    active = false;
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d("+ xPos +"px, " + yPos + "px, 0)";

}


