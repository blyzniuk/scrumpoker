const name = 'StoryResource';

function resource($resource, STORY_RESOURCE_URL) {
    return $resource(STORY_RESOURCE_URL, {
        id: '@id'
    }, {
        update: { method: 'PUT' }
    });
}

export default {name, resource}