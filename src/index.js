var roles = require('./roles/roles');

var screeps = {
    run: function(game) {
        roles.run(game);
    }
}

module.exports = screeps;