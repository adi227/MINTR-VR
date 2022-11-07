import { NearestFilter, TextureLoader, RepeatWrapping } from 'three'

import {
	dirtImg,
	logImg,
	grassImg,
	glassImg,
	woodImg,
	nft1Img,
	nft2Img,
	nft3Img,
	nft4Img,
	nft5Img
} from './images'

const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const grassTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const groundTexture = new TextureLoader().load(grassImg)
const nft1Texture = new TextureLoader().load(nft1Img)
const nft2Texture = new TextureLoader().load(nft2Img)
const nft3Texture = new TextureLoader().load(nft3Img)
const nft4Texture = new TextureLoader().load(nft4Img)
const nft5Texture = new TextureLoader().load(nft5Img)

dirtTexture.magFilter = NearestFilter;
nft1Texture.magFilter = NearestFilter;
nft2Texture.magFilter = NearestFilter;
nft3Texture.magFilter = NearestFilter;
nft4Texture.magFilter = NearestFilter;
nft5Texture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

export {
	dirtTexture,
	logTexture,
	grassTexture,
	glassTexture,
	woodTexture,
	groundTexture,
	nft1Texture,
	nft2Texture,
	nft3Texture,
	nft4Texture,
	nft5Texture
}