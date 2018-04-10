import React from 'react'
import Helmet from 'react-helmet'

import DefaultTemplate from '../components/DefaultTemplate'


export default ({ page, globalSettings }) => {
  const {title, content} = page

  return (
    <main className='FAQ'>
      <DefaultTemplate title={title} content={content} />
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </main>
  )
}
