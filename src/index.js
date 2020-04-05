var roles = require('./roles/roles');

var screeps = {
    run: function(game) {
        roles.harvester.run(game);
    }
}

module.exports = screeps;