

		function changeColorBox(){

			var sBoxColor = this.children[0].innerHTML;

			this.style.backgroundColor = sBoxColor;
			var oInput = this.children[1];
			
			if (oInput.value == sBoxColor) {
				this.style.border = 'thick green solid';
				iScore++; //adds score
			}
			else { this.style.border = 'thick red solid';
			}

			//output scores
			var oScore = document.querySelector('#score');
			oScore.innerHTML = iScore;
		}

		// Main Program
		
		var iScore = 0; //global buxket to keep score
		var oContainer = document.querySelector('#container');
		var aBoxes = oContainer.children;

		for (var i=0; i < aBoxes.length; i++) {
			aBoxes[i].addEventListener('click',changeColorBox);
		}



		// Old Version

		// function changeColorBox0(){
		// 	var oBox0 = document.querySelector('#box0');
		// 	oBox0.style.backgroundColor = oBox0.innerHTML;
		// }

		// function changeColorBox1(){
		// 	var oBox1 = document.querySelector('#box1');
		// 	oBox1.style.backgroundColor = oBox1.innerHTML;
		// }

		// function changeColorBox2(){
		// 	var oBox2 = document.querySelector('#box2');
		// 	oBox2.style.backgroundColor = oBox2.innerHTML;
		// }

		// function changeColorBox3(){
		// 	var oBox3 = document.querySelector('#box3');
		// 	oBox3.style.backgroundColor = oBox3.innerHTML;
		// }




		// var oBox0 = document.querySelector('#box0');
		// oBox0.addEventListener('click',changeColorBox);
		
		// var oBox1 = document.querySelector('#box1');
		// oBox1.addEventListener('click',changeColorBox);

		// var oBox2 = document.querySelector('#box2');
		// oBox2.addEventListener('click',changeColorBox);
		
		// var oBox3 = document.querySelector('#box3');
		// oBox3.addEventListener('click',changeColorBox);