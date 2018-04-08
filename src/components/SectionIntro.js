import React from 'react'

export default ({heading, content, buttonUrl, buttonText}) => (
	<section className='section--intro'>
		<div className='container'>
			<div className='section--intro-content'>
				<h2>{heading}</h2>
				<p>{content}</p>
			</div>
			<a className='button' href={`${buttonUrl}`}>{buttonText}</a>
		</div>
	</section>
)