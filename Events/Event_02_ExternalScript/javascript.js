

		function changeColorBox0(){
			var oBox1 = document.querySelector('#box0');
			oBox1.style.backgroundColor = 'blue';
		}
		function changeColorBox1(){
			var oBox1 = document.querySelector('#box1');
			oBox1.style.backgroundColor = 'blue';
		}

		var oBox0 = document.querySelector('#box0');
		oBox0.addEventListener('click',changeColorBox0);
		
		var oBox1 = document.querySelector('#box1');
		oBox1.addEventListener('click',changeColorBox1);