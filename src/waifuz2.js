const fetch = require('node-fetch')
const { WaifuErrors } = require('./waifuErrors')

const baseURL = "https://api.waifu.pics";


async function waifuSFW(category){
	if(!category){
		throw new WaifuErrors('Please specify a category')
	}
	const image = await fetch(`${baseURL}/sfw/${category}`)
	const parser = await image.json();
	const result = await parser.url
	return result
}

async function waifuNSFW(category){
	if(!category){
		throw new WaifuErrors('Please specify a category')
	}
	const image = await fetch(`${baseURL}/nsfw/${category}`)
	const parser = await image.json();
	const result = await parser.url
	return result
}

module.exports = {waifuSFW, waifuNSFW};