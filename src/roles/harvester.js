var constants = require('../static/constants');
var utilities = require('../static/utilities');

var harvester = {
    /** @param {Creep} creep **/
    run: harvesters => {
        console.log("harvester's running: " + harvesters?.length);
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
    if (harvester) {
        if (harvester.store.getFreeCapacity() > 0) {
            var sources = harvester.room.find(constants.findSources);
            if (harvester.harvest(sources[0]) == constants.errorNotInRange) {
                harvester.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
            }
        }
        else {
            var targets = harvester.room.find(constants.findStructures, {
                filter: (structure) => {
                    return (structure.structureType == constants.structureExtension ||
                        structure.structureType == constants.structureSpawn ||
                        structure.structureType == constants.structureTower) &&
                        structure.store.getFreeCapacity(constants.resourceEnergy) > 0;
                }
            });
            if (targets.length > 0) {
                if (harvester.transfer(targets[0], constants.resourceEnergy) == constants.errorNotInRange) {
                    harvester.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
                }
            }
        }
    }
}

module.exports = harvester;