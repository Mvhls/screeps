var constants = require('../static/constants');
var utilities = require('../static/utilities');

var harvester = {
    run: harvesters => {
        console.log("harvester's running: " + harvesters?.length);
        harvesters.forEach(harvester => {
            console.log("harvester: " + harvester);
        })
        
    },
    spawnHarvester: game => {
        let newName = constants.harvester + "_" + utilities.newGuid();
        console.log('Spawning new harvester: ' + newName);
        game.spawns[constants.spawn1].spawnCreep([constants.work,constants.carry,constants.move], newName, 
        {memory: {role: constants.harvester}});
    }
}

var harvest = (harvester) => {

}

module.exports = harvester;