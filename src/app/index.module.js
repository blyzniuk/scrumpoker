import { routerConfig } from './index.route';
import { MainController } from './main/main.controller';


angular.module('scrumpoker', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ngMaterial', 'toastr'])
  .config(routerConfig)
  .controller('MainController', MainController);
  
