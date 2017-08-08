module.exports = function kn_auto(dispatch) {
    
    //Player's CID
    let CID = null;
    //Coordinates when entering KN
	let coordinates = [62621,149164,-9475]
    
    //Hooking player's CID
    dispatch.hook('S_LOGIN', 1, event => {
            CID = event.cid;
    })
    
	dispatch.hook('cChat', 1 , (event) => {
		if(event.message.includes('!kn')){
			dispatch.hookOnce('S_SPAWN_ME', 1, event => {
				if(coordinates[0] == event.x && coordinates[1] == event.y && coordinates[2] == event.z)
				{
					spawnTele();
					return false;
				}
			})
			return false;
		}
	});
    
    //Function to tele in front of the GG boss
	function spawnTele()
	{
		dispatch.toClient('S_SPAWN_ME', 1, {
			target: CID,
			x: 73495.6171875,
			y: 142962.5,
			z: -11059.4990234375,
			alive: 1,
			unk: 0
		})
	}
}