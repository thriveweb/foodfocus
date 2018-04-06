import React from 'react'
import Helmet from 'react-helmet'

import Content from '../components/Content'
import Banner from '../components/Banner'
import './Home.css'

export default ({ page }) => {
  console.log(page)
  const { title, subtitle, featuredImage } = page
  return (
    <main className='Home'>
      <Banner image={page.featuredImage} heading={page.title} address={page.address} phone={page.phone} />
      <div className='section thin'>
        <div className='container'>
          <Content source={page.content} />
        </div>
      </div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </main>
  )
}
