function makeStars(iNum){
	var sStars = "";
	for(var iCount=0; iCount<iNum; iCount++){
		sStars += "*";
	}
	return sStars;//string of stars
}

function makeTree(iHeight){
	var sTree = "";

	for(var iCount=1; iCount<=iHeight;iCount++){
		sTree += makeStars(iCount) + "<br />";
	}
	sTree += makeStars(1);
	return sTree;
}


//---------------------------------------------

function drawTree(){
	var oSelect = document.querySelector('#box');
	var sSelectValue = oSelect.value;

	var oColor = document.querySelector('#color');
	var sColor = oColor.value;

	var oHeightInput = document.querySelector('#treeSize');
	var sTreeHeight = oHeightInput.value;
	var iTreeHeight = parseInt(sTreeHeight);

	var oDiv = document.querySelector('#'+sSelectValue);
	oDiv.innerHTML = makeTree(iTreeHeight);
	oDiv.style.color = sColor;
}

//---------------------------------------------

var oDraw = document.querySelector('#draw');
oDraw.addEventListener('click',drawTree);

