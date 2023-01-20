import React from 'react'
import Layout from '../components/Layout/Layout'

const Blog = () => {
  useEffect(() => {
    document.title = "Jamo | Blog"
  })
  return (
    <Layout>
        <div>Blog</div>
    </Layout>
  )
}

export default Blog