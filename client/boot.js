/**
 * @author    László Simon {@link http://pho3nixnest.com}
 * @license   ???
 */

// Css
import "angular/angular-csp.css!";
import "resources/css/stylesheet.css!";
import "resources/css/animate.css!";

// Common
import "jquery";
import "angular";

// App
import mainModule from 'app/app';

// Bootstrap
angular.element(document).ready(function () {
    angular.bootstrap(document, [mainModule.name], {
        strictDi: false //Some component (ex. mdDialog) fails if true (Cannot be minified)
    });
});