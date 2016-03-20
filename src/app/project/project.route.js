const name = 'project';

const config = {
    url: '/project/:projectId',
    templateUrl: 'project/project.html',
    controller: 'ProjectController',
    controllerAs: 'projectCtrl',
    resolve: {
        project: (ProjectResource, $stateParams) => {
            return ProjectResource.$get({id: $stateParams.projectId});
        }
    }
};

export default {name, config};