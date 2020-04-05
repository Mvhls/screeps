var modules = {
    run: function()
    {
        roleHarvester.run();
    }
}

module.exports = modules;

// if(harvesters.length < 2) {
//     var newName = 'Harvester' + Game.time;
//     console.log('Spawning new harvester: ' + newName);
//     Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
//         {memory: {role: 'harvester'}});
// }

// // if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
// //     creep.memory.building = false;
// //     creep.say('🔄 harvest');
// // }
// // if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
// //     creep.memory.building = true;
// //     creep.say('🚧 build');
// // }
// var tower = Game.getObjectById('469b7844760d1906a759ab58');
// if(tower) {
//     var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
//         filter: (structure) => structure.hits < structure.hitsMax
//     });
//     if(closestDamagedStructure) {
//         tower.repair(closestDamagedStructure);
//     }

//     var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
//     if(closestHostile) {
//         tower.attack(closestHostile);
//     }
// }

// for(var name in Game.creeps) {
//     var creep = Game.creeps[name];
//     if(creep.memory.role == 'harvester') {
//         roleHarvester.run(creep);
//     }
//     if(creep.memory.role == 'upgrader') {
//         roleUpgrader.run(creep);
//     }
//     if(creep.memory.role == 'builder') {
//         roleBuilder.run(creep);
//     }
// }