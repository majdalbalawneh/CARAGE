import React from 'react'

function Show_blog({blog}) {
    console.log("connected");
  return (
    <div className="col-lg-4">
    <div className="blog-item">
      <div className="blog-img">
        <img src={blog.image_url?blog.image_url:'./img/cars news.png'} alt="Image" className="blogImg"/>
        {/* <div className="meta-date">
          <span>01</span>
          <strong>Jan</strong>
          <span>2045</span>
        </div> */}
      </div>
      <div className="blog-text">
        <h3>
          <a href={blog.link} target="_blank">{blog.title}</a>
        </h3>
        <p>
        {blog.description.slice(0,200)}
        </p>
        
      </div>
      
    </div>
    
  </div>

  )
}

export default Show_blog
