var creepFactory = {
    spawnHarvester: function() {
        var newName = constants.harvester + "_" + random.guid();
        console.log('Spawning new harvester: ' + newName);
        Game.spawns[constants.spawn1].spawnCreep([WORK,CARRY,MOVE], newName, 
        {memory: {role: constants.harvester}});
    }
}