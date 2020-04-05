var creepSpawner = {
    spawnCreeps: function() {
        var harvesters;
        if(Game.creep)
        {
            harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        }
        if(!harvesters)
        {
            console.log("none");
        }
    }
}