/** ------------------------------------------------------------------------------
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) Rococo Global Technologies, Inc - All Rights Reserved 2016
 * --------------------------------------------------------------------------- **/
 
/**
* This file contains the functionalities and global variables for the application.
* @author Lehmar Cabrillos
* @version 0.01
* Version History
* [04/11/2016] 0.01 – Lehmar Cabrillos – initial codes
**/

/**
* These are the global variables
**/

/**
* The array that will hold the list of 'dishes' that 
* are statically added in the application.
* The items for the array are mocked.
**/


var dishArray = [
	{id:0, name: "Beef Teriyaki", type: "mainDish", price:100},
	{id:1, name: "Onigiri", type: "sideDish", price: 80},
	{id:2, name: "Miso Soup", type: "soup", price: 50},
	{id:3, name: "Vegetable Soup", type: "soup", price: 40},
	{id:4, name: "Kinpira Gobo", type: "sideDish", price: 70},
	{id:5, name: "Chicken Katsu", type: "mainDish", price: 110},	
];

/**
* The screen that is currently displayed.
**/
var displayedScreen = "";

/*
* This function is called to change the displayed div,
* label and image of the div#content depending on the selected
* 'displayScreen'.
* @param displayScreen - 'id' of the div to be displayed
*/
function changeContent(displayScreen) {
	console.log("bentoMain.changeContent" + " start");
	console.log("bentoMain.changeContent panel: " + displayScreen)
	if (displayedScreen != displayScreen) {
		var lblHeader = "";
		var iconHeader = "";
		
		document.getElementById("screenDish").style.visibility = "hidden";
		document.getElementById("screenDish").style.display = "none";
		document.getElementById("screenCustomize").style.visibility = "hidden";
		document.getElementById("screenCustomize").style.display = "none";
		document.getElementById("screenMenu").style.visibility = "hidden";
		document.getElementById("screenMenu").style.display = "none";
				
		switch (displayScreen) {
			case "screenDish":
				header = "Register Dish";
				iconHeader = "..\\assets\\dish_icon.png";
				// changing the content of the body, displaying the ingredients screen
				document.getElementById("screenDish").style.visibility = "visible";
				document.getElementById("screenDish").style.display = "block";
				initRegisterDishScreen();
				break;
			case "screenCustomize":
				header = "Customize Bento";
				iconHeader = "..\\assets\\customize_icon.png";
				// changing the content of the body, displaying the customize screen
				document.getElementById("screenCustomize").style.visibility = "visible";
				document.getElementById("screenCustomize").style.display = "block";
				break;
			case "screenMenu":
				header = "Bento Menu";
				iconHeader = "..\\assets\\menu_icon.png";
				// changing the content of the body, displaying the menu screen
				document.getElementById("screenMenu").style.visibility = "visible";
				document.getElementById("screenMenu").style.display = "block";
				break;
			default:
				break;
		}
		
		displayedScreen = displayScreen;
		// clearing the message spanMessage
		document.getElementById("spanMessage").innerHTML = "";
		
		// Change the label and the image of the header.
		document.getElementById("headerLabel").innerHTML = header;
		document.getElementById("headerIcon").src = iconHeader;
	}
	console.log("bentoMain.changeContent" + " start");
}

function initRegisterDishScreen(){
	console.log("bentoDish.initRegisterDishScreen" + " start");

	document.getElementById("dishName").value = "";
	document.getElementById("dishType").selectedIndex = 0;
	document.getElementById("dishPrice").value = "";
	document.getElementById("imgDishType").src = "..\\assets\\main_dish_type.png";

	console.log("bentoDish.initRegisterDishScreen" + " end");
}

function lol() {

	console.log("bentoDish.changeType" + " start");
	/*TODO: Get the element with the id 'dishType'. Store to the dishTypeField*/
	var dishTypeField = document.getElementById("dishType");
	/*TODO: Get the element with the id 'imgDishType'. Store to the imgDishTypeField*/
	var imgDishTypeField = document.getElementById("imgDishType");

	var imageLocation = "..\\assets\\";
	

	switch (dishTypeField.value) {
		case "mainDish":
			imageLocation += "main_dish_type.png";
			break;
		case "sideDish":
			imageLocation += "side_dish_type.png";
			break;
		case "soup":
			imageLocation += "soup_type.png";
			break;

	}


	
	/*TODO: Change the src attribute of the imgDishTypeField using the 'imageLocation'*/
	imgDishTypeField.src = imageLocation;
	console.log("HELLO");
	console.log("bentoDish.changeType" + "  end");
}

function validateDishNameExists() {
	console.log("bentoDish.validateDishName" + "  start");
	var valid = true;
	
	/*TODO: Get the value of the input field with 'dishName' id
		Store to the dishNameField variable.*/
	var dishNameField = document.getElementById("dishName").value;
	


	// Note: The 'required' field is automatically validated in the html file.	
	// Traverse through the 'dishArray' to check if there exists an object with the same name
	for (var i = 0; i < dishArray.length; i++){
		/* TODO: check if the inputted 'dish' name matches the name of the 
			 * current 'dish' from the 'dishArray' array.
			 * HINT: Use the .toLowerCase() function to ignore the type-case.*/
		if (dishNameField.toLowerCase() == dishArray[i].name.toLowerCase()) {
			alert("Name already exists.");
			valid = false;
			break;
		}
	}
	console.log(dishNameField);
	console.log("bentoDish.validateDishName" + "  end");
	return valid;
	
}

function registerDish(){
	console.log("bentoDish.registerDish" + " start");
	
	// displaying a confirmation message to the user and storing its result to a variable
	var confirmation = window.confirm("Are you sure you want to add dish?");
	
	// check if the confirmation is true/false
	if (confirmation) {
		// check if inputs are valid
		/* TODO: Check if the name exists in the 'dishList' array
		 * Use the validateNameExists() function.*/
		if (validateDishNameExists()) {
			var nameField = document.getElementById("dishName").value;
			var typeField = document.getElementById("dishType").value;
			/*TODO: Get the field for the dish price.*/
			var priceField = document.getElementById("dishPrice").value;
			priceField = parseFloat(priceField);
			/*TODO: Complete the dishItem properties.
				It contains the id, name, price, type*/
			var dishItem = { 
				id: dishArray.length, 
				name: nameField, type: typeField, price:priceField
			};
			
	
			/*TODO: Insert the dish into the 'dishArray' */
			dishArray.push(dishItem);
			/*TODO: Display an 'alert' saying that adding item was successful.*/
			alert("Adding the item was successful");
			for (var i = 0; i < dishArray.length; i++) {
				console.log(dishArray[i]);
			}

			// initializing the screen to its original state
			/*TODO: Initialize the screen by using the 'initRegisterDishScreen' function. */
			initRegisterDishScreen();
		}
	}
	
	return false;
	console.log("bentoDish.registerDish" + " end");
}
