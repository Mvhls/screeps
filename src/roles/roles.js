var constants = require('../static/constants');
var harvester = require('./harvester');
var upgrader = require('./upgrader');

var roles = {
    run: (game) => {
        
        // filter creeps by role
        let harvesters = _.filter(game.creeps, (creep) => creep.memory.role == constants.harvester);
        let upgraders = _.filter(game.creeps, (creep) => creep.memory.role == constants.upgrader);
        console.log("harvesters: ", harvesters?.length);
        console.log("upgraders: ", upgraders?.length);

        // spawn harvesters
        if (harvesters?.length < 2) {
            harvester.spawnHarvester(game);
        }

        // spawn upgraders
        if(harvesters?.length >= 2 && upgraders?.length < 2) {
            upgrader.spawnUpgrader(game);
        }

        // run creeps
        harvester.run(harvesters);
        upgrader.run(upgraders);
    }
}

module.exports = roles;