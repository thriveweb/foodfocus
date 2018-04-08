import React from 'react'
import Helmet from 'react-helmet'

// import Content from '../components/Content'
import Banner from '../components/Banner'
import ImageGallery from '../components/ImageGallery'
import SectionIntro from '../components/SectionIntro'
import './Home.css'

export default ({ page, globalSettings }) => {
  const { featuredImage, title, address, phone, intro, galleryImages } = page

  console.log(page)

  return (
    <main className='Home'>
      <Banner image={featuredImage} heading={title} address={address} phone={phone} />
      <SectionIntro title={intro.title} content={intro.content} buttonText={intro.buttonText} buttonUrl={intro.buttonUrl} />
      <ImageGallery galleryItems={galleryImages} />
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </main>
  )
}

