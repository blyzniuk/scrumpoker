import loginState from './login/login.route';
import signupState from './signup/signup.route';
import projectState from './project/project.route';
import projectsListState from './projectsList/projectsList.route';

export default function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state(loginState.name, loginState.config)
    .state(signupState.name, signupState.config)
    .state(projectState.name, projectState.config)
    .state(projectsListState.name, projectsListState.config);

  $urlRouterProvider.otherwise('/signup');
}
