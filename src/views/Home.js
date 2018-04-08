import React from 'react'
import Helmet from 'react-helmet'

// import Content from '../components/Content'
import Banner from '../components/Banner'
import ImageGallery from '../components/ImageGallery'
import './Home.css'

export default ({ page, globalSettings }) => {
  const { featuredImage, title, address, phone } = page

  return (
    <main className='Home'>
      <Banner image={featuredImage} heading={title} address={address} phone={phone} />
      <ImageGallery galleryItems={page.galleryImages} />
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </main>
  )
}
