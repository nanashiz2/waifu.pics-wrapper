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
	const waifu = await Waifuz2.waifuSFW('neko') // neko is the Image category
	console.log(waifu)
}
waifupic() // returns https://i.waifu.pics/PeCLokQ.jpg
```
Click [here](https://waifu.pics/docs) for all image categories