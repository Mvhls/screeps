// sites are the declarative data for the game. It describes your room, or a part of
// a room called a 'site'
var site = {
    type: "room",
    name: "first room site",
    spawnId: "e644dae84a8f462106ea4e71", // id of creep spawner for site
    controllerId: "2a21e1b53d802c9bcb5ee3b1", // id of closest controller, if any
    
    // list of all structures in site, 
    // possibly do both existing structures, and coordinates of where the structure should be.
    // doesn't need to be every structure? possibly just important ones used in jobs
    structures: [
        {
            name: "container-1",
            type: "container",
            cords: {
                x: 33,
                y: 22
            }
        }
    ],
    // jobs should be listed in highest to lowest priority, as any screeps that expire will be re-added in priority
    // jobs should list required fields or options. like a 'harvest, then deliver to' job would require a delivery spot
    jobs: [
        {
            name: "basicHarvester", // name of function
            screepCount: 2, // max screeps
            default: "upgrade" // possibly include a default job for the screep, if there's nothing to do
        }
    ]
}