var roles = require('./roles/roles');

var screeps = {
    run: function(game) {
        roles.run(game);
    },
    clean: () => {
        for(var i in Memory.creeps) {if(!Game.creeps[i]) {delete Memory.creeps[i];}}
    }
}

module.exports = screeps;