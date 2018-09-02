/** ------------------------------------------------------------------------------
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) Rococo Global Technologies, Inc - All Rights Reserved 2016
 * --------------------------------------------------------------------------- **/
 
/**
* This file contains the functionalities for the 'Register Dish' screen.
* @author Lehmar Cabrillos
* @version 0.01
* Version History
* [04/11/2016] 0.01 – Lehmar Cabrillos – initial codes
**/

/**
* This function is used to initialize the elements in the 'register dish' screen.
* Clears the input fields, sets the selected option, and the image.
**/
function initRegisterDishScreen(){
	console.log("bentoDish.initRegisterDishScreen" + " start");

	document.getElementById("dishName").value = "";
	document.getElementById("dishType").selectedIndex = 0;
	document.getElementById("dishPrice").value = "";
	document.getElementById("imgDishType").src = "..\\assets\\main_dish_type.png";

	console.log("bentoDish.initRegisterDishScreen" + " end");
}

/**
* This function is used to change the image of the 'imgDishType' depending 
* on the selected value in the 'dishType' select box.
**/


/**
* This function is called to validate if the inputted 'name' of the dish
* is already in the list.
* @return true - name doest not exists in the list; false - otherwise
**/


/**
* This function is used to add the 'dish' into the 'dishArray'.
**/
function registerDish() {
	alert("HOY");
	
}

