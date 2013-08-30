/**
* @description
*
* Provides a directive to create multiple switch switcher. 
* Each element takes a active and onSwitch expression.
*
*/

angular.module('angular-switcher',[])
    .directive('switch', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attributes) {
                
                var selectedClass = 'switch-active';
                
                if (!attributes.active) {
                    throw Error("active attribute is required.");
                }                
                
                attributes.$observe('active', function (value) {
                    setState(value);
                });                                
                
                function setState(value){
                    if (value === 'false'){
                        element.removeClass(selectedClass);
                    }                    
                    
                    if (value === 'true'){
                        if (element.hasClass(selectedClass)) {
                            return;
                        }                    
                        element.addClass(selectedClass);
                        
                        $timeout(function(){
                            scope.$apply(attributes.onSwitch)                                                            
                        ,0});                        
                    }
                }
            }
        }
    }); 
