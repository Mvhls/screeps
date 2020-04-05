var harvester = require('./harvester');
var constants = require('../static/constants');

var roles = {
    run: (game) => {
        var harvesters = _.filter(game.creeps, (creep) => creep.memory.role == constants.harvester);
        console.log("harvesters: ", harvesters?.length);
        if (harvesters?.length < 1) {
            harvester.spawnHarvester(game);
        }
        harvester.run(harvesters);
    }
}

module.exports = roles;