import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import uiRouter from 'angular-ui-router';

import '../../build/templates';
import routerConfig from './router.js';
import Resources from './resources.js';

import loginCtrl from './login/login.controller';
import signupCtrl from './signup/signup.controller';
import projectsListCtrl from './projectsList/projectsList.controller';
import projectCtrl from './project/project.controller';


angular.module('scrumpoker', ['Templates', Resources, ngAnimate, ngMaterial, ngMessages, uiRouter])
    .controller(loginCtrl.name, ['$http', '$state', loginCtrl.Controller])
    .controller(signupCtrl.name, ['$http', signupCtrl.Controller])
    .controller(projectCtrl.name, [projectCtrl.Controller])
    .controller(projectsListCtrl.name, [projectsListCtrl.Controller])
    .config(['$stateProvider', '$urlRouterProvider', routerConfig])
    .config(['$httpProvider', ($httpProvider) => {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

