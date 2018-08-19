// aim: display menu and images to the page 

		var menu = ["Cucumber Sandwich", "Tonkatsu With Curry", "Tirimasu", "Assorted Beverages"];
		var images= ['<img src="images/Cucumber.jpg" alt= "Cucumber Sandwich">', '<img src="images/Tonkatsu.jpg" alt= "Tonkatsu With Curry">', '<img src="images/tiramisu.jpg" alt = "Tiramisu Desert">', '<img src="images/beverages.jpg" alt = "Beverages">'];
		var prices = ["$2.50", "$5.50", "$3.50", "$1.50"];
		function displayMenu(){
			for (var i = 0; i < menu.length; i++) {
		 		document.getElementById('display').innerHTML += menu[i] += images[i] += prices[i] +="<br>";
		 		// this allows the function to assign the images and display as the loop goes through each array. 
					// document.getElementById('display').innerHTML += menu[i] += "<br>";
					// += add the value of that expression to the value of the variable to the left of the operator,
					//and assign the result to that variable
					// document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + menu[i]
			}

		}



		
	
		 	