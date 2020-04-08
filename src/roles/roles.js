var constants = require('../static/constants');
var harvester = require('./harvester');
var upgrader = require('./upgrader');
var builder = require('./builder');

var roles = {
    run: (game) => {
        
        // filter creeps by role
        let harvesters = _.filter(game.creeps, (creep) => creep.memory.role == constants.harvester);
        let upgraders = _.filter(game.creeps, (creep) => creep.memory.role == constants.upgrader);
        let builders = _.filter(game.creeps, (creep) => creep.memory.role == constants.builder);
        console.log("harvesters: ", harvesters?.length);
        console.log("upgraders: ", upgraders?.length);
        console.log("builders: ", builders?.length);

        // spawn harvesters
        if (harvesters?.length < 2) {
            harvester.spawnHarvester(game);
        }

        // spawn upgraders
        if(harvesters?.length >= 2 && upgraders?.length < 2) {
            upgrader.spawnUpgrader(game);
        }

        // spawn builders
        if(harvesters?.length >= 2 && upgraders?.length >= 2 && builders?.length < 1) {
            builder.spawnBuilder(game);
        }

        // run creeps
        harvester.run(harvesters);
        upgrader.run(upgraders);
        builder.run(builders);
    }
}

module.exports = roles;