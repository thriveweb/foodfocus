import React from 'react'
import Helmet from 'react-helmet'

// import Content from '../components/Content'
import Banner from '../components/Banner'
import ImageGallery from '../components/ImageGallery'
import SectionIntro from '../components/SectionIntro'
import './Home.css'

export default ({ page, globalSettings }) => {
  const { featuredImage, title, address, phone } = page
  const { heading, content, ButtonText, ButtonUrl} = page

  return (
    <main className='Home'>
      <Banner image={featuredImage} heading={title} address={address} phone={phone} />
      <SectionIntro heading={heading} content={content} ButtonText={ButtonText} ButtonUrl={ButtonUrl} />
      <ImageGallery galleryItems={page.galleryImages} />
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </main>
  )
}
