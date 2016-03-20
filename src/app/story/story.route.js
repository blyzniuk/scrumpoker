const name = 'story';

const config = {
    url: '/story/:storyId',
    templateUrl: 'story/story.html',
    controller: 'StoryController',
    controllerAs: 'storyCtrl',
    resolve: {
        story: (StoryResource, $stateParams)=> {
            return StoryResource.$get({id: $stateParams.storyId});
        }
    }
};

export default {name, config};