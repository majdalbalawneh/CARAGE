import React, {useState, useEffect} from "react";
import SubHeader from './SubHeader'
import axios from 'axios'
import Show_blog from "./Show_blog";


function Blog() {

    const [Blog,setBlog]=useState([]);

    
  useEffect(() => {
      const loadBlog = async () => {
      const response = await axios.get("https://newsdata.io/api/1/news?apikey=pub_9038205f94a64ffae1ffc81b3d78f90d46ca&q=cars%20AND%20automobile ");
     

      setBlog(response.data.results);
  };

  loadBlog();
  }, []);
 let i=0;

  return (
    <div className="blog">
    <div className="container">
      <SubHeader subTitle1='Our Blog' subTitle2='Latest news &amp; articles'/>
      <div className="row">
        
{/* ////////////////////// */}

{Blog.slice(0,3).map((blog,index)=>(

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

        )
        )}
{/* /////////////////// */}


        {/* <div className="col-lg-4">
          <div className="blog-item">
            <div className="blog-img">
              <img src="img/blog-2.jpg" alt="Image" />
              <div className="meta-date">
                <span>01</span>
                <strong>Jan</strong>
                <span>2045</span>
              </div>
            </div>
            <div className="blog-text">
              <h3>
                <a href="#">Lorem ipsum dolor sit amet</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem,
                quis convall diam eleife. Nam in arcu sit amet massa ferment
                quis enim. Nunc augue velit metus congue eget semper
              </p>
            </div>
            <div className="blog-meta">
              <p>
                <i className="fa fa-user" />
                <a href="">Admin</a>
              </p>
              <p>
                <i className="fa fa-folder" />
                <a href="">Web Design</a>
              </p>
              <p>
                <i className="fa fa-comments" />
                <a href="">15 Comments</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog-item">
            <div className="blog-img">
              <img src="img/blog-3.jpg" alt="Image" />
              <div className="meta-date">
                <span>01</span>
                <strong>Jan</strong>
                <span>2045</span>
              </div>
            </div>
            <div className="blog-text">
              <h3>
                <a href="#">Lorem ipsum dolor sit amet</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem,
                quis convall diam eleife. Nam in arcu sit amet massa ferment
                quis enim. Nunc augue velit metus congue eget semper
              </p>
            </div>
            <div className="blog-meta">
              <p>
                <i className="fa fa-user" />
                <a href="">Admin</a>
              </p>
              <p>
                <i className="fa fa-folder" />
                <a href="">Web Design</a>
              </p>
              <p>
                <i className="fa fa-comments" />
                <a href="">15 Comments</a>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
  )
}

export default Blog
