var constants = require('../static/constants');
var utilities = require('../static/utilities');

var builder = {

    /** @param {Creep} creep **/
    run: builders => {
        builders.forEach(builder => {
            build(builder);
        })
    },
    spawnBuilder: game => {
        let newName = constants.builder + "_" + utilities.newGuid();
        console.log('Spawning new builder: ' + newName);
        game.spawns[constants.spawn1].spawnCreep([constants.work, constants.carry, constants.move], newName,
            { memory: { role: constants.builder } });
    }
}

var build = creep => {
    if (creep.memory.building && creep.store[constants.resourceEnergy] == 0) {
        creep.memory.building = false;
        creep.say('🔄 harvest');
    }
    if (!creep.memory.building && creep.store.getFreeCapacity() == 0) {
        creep.memory.building = true;
        creep.say('🚧 build');
    }

    if (creep.memory.building) {
        var targets = creep.room.find(constants.findConstructionSites);
        if (targets.length) {
            if (creep.build(targets[0]) == constants.errorNotInRange) {
                creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
            }
        }
    }
    else {
        var sources = creep.room.find(constants.findSources);
        var closest = _.sortBy(sources, s => creep.pos.getRangeTo(s))
        if (creep.harvest(closest[0]) == constants.errorNotInRange) {
            creep.moveTo(closest[0], { visualizePathStyle: { stroke: '#ffaa00' } });
        }
    }
}

module.exports = builder;