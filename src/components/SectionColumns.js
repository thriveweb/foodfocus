import React from 'react'

export default ({columns}) => (
	<section className='section--columns'>
		<div className='container'>
			{columns.map((column, index) => {
				return <div key={`column-${index}`} className={`section--column--item ${!column.leftAlign ? 'column-right' : ''}`}>
					<div className='section--column-item-image' style={{backgroundImage: `url(${column.image})`}}></div>
					<div className='section--column-item-content'>
						<h3>{column.category}</h3>
						<h2>{column.title}</h2>
						<h4 className='title-italic'>{column.subTitle}</h4>
						<p>{column.content}</p>
					</div>
				</div>	
			})}
		</div>
	</section>
)