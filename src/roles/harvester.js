var constants = require('../static/constants');
var utilities = require('../static/utilities');

var harvester = {
    /** @param {Creep} creep **/
    run: harvesters => {
        harvesters.forEach(harvester => {
            harvest(harvester);
        })

    },
    spawnHarvester: game => {
        let newName = constants.harvester + "_" + utilities.newGuid();
        console.log('Spawning new harvester: ' + newName);
        game.spawns[constants.spawn1].spawnCreep([constants.work, constants.carry, constants.move], newName,
            { memory: { role: constants.harvester } });
    }
}

var harvest = (harvester) => {
    if (harvester.store.getFreeCapacity() > 0 && !harvester.memory.upgrade) {
        getEnergy(harvester);
    }
    else {
        var storage = findStorage(harvester);
        if (storage?.length > 0) {
            harvester.memory.upgrade = false;
            storeEnergy(harvester, storage[0]);
        }
        else {
            harvester.memory.upgrade = true;
            upgrade(harvester);
        }
    }
}

var getEnergy = harvester => {
    var sources = harvester.room.find(constants.findSources);
    if (harvester.harvest(sources[0]) == constants.errorNotInRange) {
        harvester.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
    }
}

var findStorage = harvester => {
    var targets = harvester.room.find(constants.findStructures, {
        filter: (structure) => {
            return (structure.structureType == constants.structureExtension ||
                structure.structureType == constants.structureSpawn ||
                structure.structureType == constants.structureTower) &&
                structure.store.getFreeCapacity(constants.resourceEnergy) > 0;
        }
    });

    return targets;
}

var storeEnergy = (harvester, target) => {
    if (harvester.transfer(target, constants.resourceEnergy) == constants.errorNotInRange) {
        harvester.moveTo(target, { visualizePathStyle: { stroke: '#ffffff' } });
    }
}

var upgrade = harvester => {
    if (harvester.upgradeController(harvester.room.controller) == constants.errorNotInRange) {
        harvester.moveTo(harvester.room.controller, { visualizePathStyle: { stroke: '#ffffff' } });
    }
}

module.exports = harvester;