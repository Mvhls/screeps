// spawns
// harvester
Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 
    'Harvester1', 
    { memory: { role: 'harvester' } } );

// upgrader
Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 
    'Upgrader1',
    { memory: { role: 'upgrader' } } );

// big harvester
Game.spawns['Spawn1'].spawnCreep( [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE],
    'HarvesterBig',
    { memory: { role: 'harvester' } } );

// suicide
Game.creeps['Harvester1'].suicide();

// filtering (harvester)
var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

// activate save mode?
Game.spawns['Spawn1'].room.controller.activateSafeMode();

// construct tower
Game.spawns['Spawn1'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );

// get by id (tower)
var tower = Game.getObjectById('853590d3029da74c97984a8d');

// main loop
var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    for(var name in Game.rooms) {
        console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}