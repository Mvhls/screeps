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
    if (creep.store[constants.resourceEnergy] == 0) {
        creep.memory.building = false;
        creep.memory.upgrading = false;
        creep.memory.harvesting = true;
        creep.say('🔄 harvest');
    }
    if (!creep.memory.building && !creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
        creep.memory.harvesting = false;
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
        else
        {
            creep.memory.building = false;
            creep.memory.upgrading = true;
        }
    }

    if (creep.memory.upgrading)
    {
        if (creep.upgradeController(creep.room.controller) == constants.errorNotInRange) {
            creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#ffffff' } });
        }
    }

    if (creep.memory.harvesting) {
        var sources = creep.room.find(constants.findSources);
        // var closest = _.sortBy(sources, s => creep.pos.getRangeTo(s))
        if (creep.harvest(sources[1]) == constants.errorNotInRange) {
            creep.moveTo(sources[1], { visualizePathStyle: { stroke: '#ffaa00' } });
        }
    }
}

module.exports = builder;