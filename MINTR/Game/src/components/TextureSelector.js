import { useEffect, useState } from 'react'
import { useStore } from "../hooks/useStore"
import { useKeyboard } from "../hooks/useKeyboard"
import { dirtImg, grassImg, glassImg, logImg, woodImg, nft1Img, nft2Img, nft3Img, nft4Img, nft5Img } from '../images/images'

const images = {
	dirt: dirtImg,
	grass: grassImg,
	glass: glassImg,
	wood: woodImg,
	log: logImg,
	nft1: nft1Img,
	nft2: nft2Img,
	nft3: nft3Img,
	nft4: nft4Img,
	nft5: nft5Img,
}

export const TextureSelector = () => {
	const [visible, setVisible] = useState(false)
	const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
	const {
		dirt,
		grass,
		glass,
		wood,
		log,
		nft1,
		nft2,
		nft3,
		nft4,
		nft5

	} = useKeyboard()

	useEffect(() => {
		const textures = {
			dirt,
			grass,
			glass,
			wood,
			log,
			nft1,
			nft2,
			nft3,
			nft4,
			nft5
		}
		const pressedTexture = Object.entries(textures).find(([k, v]) => v)
		if (pressedTexture) {
			setTexture(pressedTexture[0])
		}
	}, [setTexture, dirt, grass, glass, wood, log, nft1, nft2, nft3, nft4, nft5])



	useEffect(() => {
		const visibilityTimeout = setTimeout(() => {
			setVisible(false)
		}, 2000)
		setVisible(true)
		return () => {
			clearTimeout(visibilityTimeout)
		}
	}, [activeTexture])

	return visible && (
		<div className='absolute centered texture-selector'>
			{Object.entries(images).map(([k, src]) => {
				return (<img
					key={k}
					src={src}
					alt={k}
					className={`${k === activeTexture ? 'active' : ''}`}
				/>)
			})}
		</div>
	)
}