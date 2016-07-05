var Model = require('../model');

module.exports = Model.extend({
    path: '/plans',
    'delete' : Model.createMethod({
    	method : 'DELETE',
    	urlData : '/{id}'
    })
});