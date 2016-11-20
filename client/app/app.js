// Css
import "resources/fonts/MaterialIcons/material-icons.css!";
import "resources/fonts/Roboto/roboto.css!";
import "angular-material/angular-material.css!";

// Common
import "angular-animate";
import "angular-material";
import "angular-messages";
import "angular-resource";
import "angular-route";
import "api-check";
import "angular-formly";
import "angular-formly-material";

import mdThemingConfig from 'app/configs/mdTheme';
import template from 'app/app.html!text';

(function (angular, template) {
    angular.module('ng.app', ['ngMaterial'])
    .config(mdThemingConfig)
    .directive('app', function () {
        /*
        * & function
        * @ string
        * = object
        */
        return {
            restrict: 'E',
            template: template,
            replace: true,
            scope: {
                
            },
            link: function ($scope) {

            },
            controller: [
                '$scope', '$mdDialog', '$interval', 
                function ($scope, $mdDialog, $interval) {
                    $scope.title = "Hello World";
                    $scope.nav = {
                        home: { text: 'home' },
                        goodStuff: { text: 'Good stuff' },
                        contact: { text: 'Contact' }
                    }
                    $scope.goto = (page) => {
                        //console.log(page);
                    }
                }
            ]
        };
    });
})(angular, template);

export default angular.module('app', ['ng.app']);