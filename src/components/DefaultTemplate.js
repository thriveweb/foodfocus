import React from 'react'

export default({title, content}) => (
	<section className='section--default-template'>
		<div className='container'>
			<h1>{title}</h1>
			<p>{content}</p>
		</div>
	</section>
)