## WaifuZ2

**WaifuZ2** is a up-to-date node.js api wrapper for [waifu.pics](https://waifu.pics/)

### Installation

```
npm i @nanashiz2/waifu-pics
```
## Example
```js
const {Waifuz2} = require('@nanashiz2/waifu-pics')

async function waifupic(){
	// SFW IMAGES
	const waifuSFW = await Waifuz2.waifuSFW('neko') // neko is the Image category
	console.log(waifuSFW)

	// NSFW IMAGES
	const waifuNSFW = await Waifuz2.waifuNSFW('waifu')
	console.log(waifuNSFW)
}
waifupic()
```
Click [here](https://waifu.pics/docs) for all image categories
