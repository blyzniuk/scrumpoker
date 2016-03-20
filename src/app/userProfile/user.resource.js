const name = 'UserResource';

function resource($resource, USER_RESOURCE_URL) {
    return $resource(USER_RESOURCE_URL, {
        id: '@id'
    }, {
        update: { method: 'PUT' }
    });
}

export default {name, resource}