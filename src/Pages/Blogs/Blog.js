import React from 'react'
import Header from '../../Components/Header/Header'
import './blog.css'
import BlogCard from '../../Components/BlogCard/BlogCard'
import DataGridMui from '../../Components/DataGridMui/DataGridMui'
function Blog() {
  return (
    <div>
      <Header />
     <div className='mt-5'>
     <DataGridMui/>
     </div>
     <div className="row mt-5 m-0 p-0">
        <div className="col-12 col-md-6 col-lg-4">
        <BlogCard/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
        <BlogCard/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
        <BlogCard/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
        <BlogCard/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
        <BlogCard/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
        <BlogCard/>
        </div>
     </div>
    </div>
  )
}

export default Blog