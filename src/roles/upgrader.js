var constants = require('../static/constants');
var utilities = require('../static/utilities');

var upgrader = {

    /** @param {Creep} creep **/
    run: upgraders => {
        upgraders.forEach(upgrader => {
            upgrade(upgrader);
        })
    },
    spawnUpgrader: game => {
        let newName = constants.upgrader + "_" + utilities.newGuid();
        console.log('Spawning new upgrader: ' + newName);
        game.spawns[constants.spawn1].spawnCreep([constants.work, constants.carry, constants.move], newName,
            { memory: { role: constants.upgrader } });
    }
}

var upgrade = upgrader => {
    if (upgrader.memory.upgrading && upgrader.store[constants.resourceEnergy] == 0) {
        upgrader.memory.upgrading = false;
        upgrader.say('🔄 harvest');
    }
    if (!upgrader.memory.upgrading && upgrader.store.getFreeCapacity() == 0) {
        upgrader.memory.upgrading = true;
        upgrader.say('⚡ upgrade');
    }

    if (upgrader.memory.upgrading) {
        if (upgrader.upgradeController(upgrader.room.controller) == constants.errorNotInRange) {
            upgrader.moveTo(upgrader.room.controller, { visualizePathStyle: { stroke: '#ffffff' } });
        }
    }
    else {
        var sources = upgrader.room.find(constants.findSources);
        if (upgrader.harvest(sources[0]) == constants.errorNotInRange) {
            upgrader.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
        }
    }
}

module.exports = upgrader;