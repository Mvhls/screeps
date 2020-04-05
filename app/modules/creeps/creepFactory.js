var creepSpawner = {
    spawnHarvester: function() {
        var newName = constants.harvester + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns[constants.spawn1].spawnCreep([WORK,CARRY,MOVE], newName, 
        {memory: {role: constants.harvester}});
    }
}