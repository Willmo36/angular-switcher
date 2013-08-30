## AngularJS-Switcher ##
Directive for creating muli-option switchers in [AngularJS](https://github.com/angular/angularjs "AngularJS").

 A switch will `$observe` an expression, changing it's state and calling a function on the scope when the expressions value changes.

## Installing ##
Include the script **after** Angular and **before** your module definition:

    <script src="angular.min.js"></script>        
    <script src='angular-switcher.js'></script>   
    <script src="app.js"></script>        

Then inject into your module:
	
	var app = angular.module('myApp', ['angular-switcher']);

## Usage ##
	<div>
		<span switch active='{{someValue == 1}}' on-switch='controllerFunction(someValue)'></span>
		<span switch active='{{someValue == 3}}' on-switch='controllerFunction(someValue)'></span>
	</div>

**switch:** This is the directive to mark the element as a switch.

**active (required):** When the expression in the active attribute  becomes `true` the switch will become active.

**on-switch (optional):** When the switch is activated the function in the `on-switch` attribute will fire on the current scope.

### ng-click ###
Obviously you are going to want the switch to change when you click it as well. Since the switch `$observe`s an expression you can use the normal `ng-click` to change the outcome of that expression:

	<div>
		<span switch active='{{someValue == 1}}' ng-click='someValue = 1'></span>
		<span switch active='{{someValue == 3}}' ng-click='someValue = 3'></span>
	</div>

 

## Styling ##
An active switch has a class of `switch-active`.  