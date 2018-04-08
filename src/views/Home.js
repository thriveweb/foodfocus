import React from 'react'
import Helmet from 'react-helmet'

// import Content from '../components/Content'
import Banner from '../components/Banner'
import ImageGallery from '../components/ImageGallery'
import './Home.css'

export default ({ page, globalSettings }) => {
  const { featuredImage, title, address, phone } = page
  const galleryItems = [title]
  
  return (
    <main className='Home'>
      <Banner image={page.featuredImage} heading={page.title} address={page.address} phone={page.phone} />
      <div className='section thin'>
        <div className='container'>
          <ImageGallery galleryItems={galleryItems} />
        </div>
      </div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </main>
  )
}
