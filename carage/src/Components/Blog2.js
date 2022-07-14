import React, {useState, useEffect} from "react";

function Blog2({blog}){
 
 return (

<>
<div className="col-lg-4">
            <div className="blog-item">
              <div className="blog-img">
                <img src={blog.image_url?blog.image_url:'./img/cars news.png'} alt="Image" className="blogImg"/>
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
</>


        );}
   
export default Blog2 ;
