// aim: display menu and images to the page 

		var menu = ["Cucumber Sandwich", "Tonkatsu With Curry", "Tirimasu"];
		var images= ['<img src="images/Cucumber.jpg">', '<img src="images/Tonkatsu.jpg">', '<img src="images/tiramisu.jpg">'];
		function displayMenu(){
			for (var i = 0; i < menu.length; i++) {
		 		document.getElementById('display').innerHTML += menu[i] += images[i] += "<br>";
		 		// this allows the function to assign the images and display as the loop goes through each array. 
					// document.getElementById('display').innerHTML += menu[i] += "<br>";
					// += add the value of that expression to the value of the variable to the left of the operator,
					//and assign the result to that variable
					// document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + menu[i]
			}

		}



		
	
		 	