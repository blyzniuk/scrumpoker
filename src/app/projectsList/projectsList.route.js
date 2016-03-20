const name = 'projectsList';

const config = {
    url: '/',
    templateUrl: 'projectsList/projectsList.html',
    controller: 'ProjectsListController',
    controllerAs: 'projectsListCtrl',
    resolve: {
        projects: (ProjectResource)=> {
            console.log('lst');
            console.log(ProjectResource.$query());
            return ProjectResource.$query();
        }
    }
};

export default {name, config};