import React from 'react'

import './SectionIntro.css'

export default ({title, content, buttonUrl, buttonText}) => (
	<section className='section--intro'>
		<div className='container'>
			<div className='section--intro-content'>
				<h2>{title}</h2>
				<p className='title-italic'>{content}</p>
			</div>
			<a className='button' href={`${buttonUrl}`} target='_blank'>{buttonText}</a>
		</div>
	</section>
)