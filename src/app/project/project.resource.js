const name = 'ProjectResource';

function resource($resource, PROJECT_RESOURCE_URL) {
    return $resource(PROJECT_RESOURCE_URL, {
        id: '@id'
    }, {
        update: { method: 'PUT' }
    });
}

export default {name, resource}