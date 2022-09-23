class WaifuErrors extends Error{
	constructor(message){
		super(message);
		this.name = "WaifuZ2Error"
	}
}

module.exports = { WaifuErrors }