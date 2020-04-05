var creepSpawner = {
    spawnCreeps: function() {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == constants.harvester);
        console.log("harvesters: ", harvesters);
        if(!(Array.isArray(harvesters) && harvesters.length))
        {
            creepFactory.spawnHarvester();
        }
    }
}