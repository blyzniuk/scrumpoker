import angular from 'angular';
import ngResource from 'angular-resource';

import Project from './project/project.resource';
import Story from './story/story.resource';
import User from './userProfile/user.resource';

const api = 'http://localhost\:3000/api/';

const MODULE_NAME = 'scrumpoker.resources';

const module = angular.module(MODULE_NAME, [
    ngResource
]);

module
    .constant('PROJECT_RESOURCE_URL', `${api}project/:id`)
    .constant('STORY_RESOURCE_URL', `${api}story/:id`)
    .constant('USER_RESOURCE_URL', `${api}user/:id`)
    .service(Project.name, ['$resource', Project.resource])
    .service(Story.name, ['$resource', Story.resource])
    .service(User.name, ['$resource', User.resource]);

export { module, MODULE_NAME as default };