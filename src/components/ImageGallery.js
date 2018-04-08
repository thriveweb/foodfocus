import React from 'react'

export default ({galleryItems}) => (
	<section className='section--image-gallery'>
		{galleryItems.map(galleryItem => {
			return <div key={galleryItem.title} className='section--image-gallery-item' style={{backgroundImage: `url(${galleryItem.image})`}}>
				<h2>{galleryItem.title}</h2>
			</div>
		})}
	</section>
)