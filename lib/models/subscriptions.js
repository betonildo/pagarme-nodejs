var Model = require('../model');

module.exports = Model.extend({
    path: '/subscriptions',
    cancel : Model.createMethod({
    	method : 'POST',
    	urlDate : '/{id}/cancel'
    })
});