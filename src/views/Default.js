import React from 'react'
import Helmet from 'react-helmet'

import DefaultTemplate from '../components/DefaultTemplate'


export default ({ page, globalSettings }) => {
  const { featuredImage, title, intro, galleryImages, columns, contact } = page

  return (
    <main className='Default'>
      <DefaultTemplate title={title} content={content} />
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </main>
  )
}
