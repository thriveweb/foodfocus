import React from 'react'
import './ImageGallery.css'

export default ({galleryItems}) => (
	<section className='section--image-gallery'>
		{galleryItems.map((galleryItem, index) => {
			console.log(index)
			return [
				<div key={galleryItem.title} className={`section--image-gallery-item section-image`} style={{backgroundImage: `url(${galleryItem.image})`}}>
					<h3>{galleryItem.title}</h3>
				</div>,
				((index + 1) % 4 === 0 && index !== 0 ? <div className='line-break'></div> : '')
			]
		})}
	</section>
)