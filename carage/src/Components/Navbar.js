import React ,{ useState }  from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';


function Navbar() {
  let id = sessionStorage.getItem("user_id");

  let state = false ;
  console.log(id+"      ");

  if( id > 0 )
  {
    console.log("sheesh");
    state = true;
  }

      const [is_logged,set_logged] = useState(state);



  // let is_logged = false;
  console.log(id+"      "+is_logged);

 
  
  
  

  // const is_loggged = ()=>
  // {
    

  //     return is_logged;
      
   
  //   }


  
  

   const logout =()=>{

    sessionStorage.setItem("user_id" , null);
    // console.log("heh"+id+is_logged);
    set_logged(false);

   }                     
  return (
    <>
      <>
  <meta charSet="utf-8" />
  <title>CARAGE</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content="Free Website Template" name="keywords" />
  <meta content="Free Website Template" name="description" />
  {/* Favicon */}
  <link href="img/favicon.ico" rel="icon" />
  {/* Google Font */}
  <link
    href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  {/* CSS Libraries */}
  <link
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
    rel="stylesheet"
  />
  <link href="lib/flaticon/font/flaticon.css" rel="stylesheet" />
  <link href="lib/animate/animate.min.css" rel="stylesheet" />
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
  {/* Template Stylesheet */}
  <link href="css/style.css" rel="stylesheet" />
  
  <>
  {/* Nav Bar Start */}
  <div className="nav-bar">
    <div className="container">
      
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="col-lg-4 col-md-5">
          <div className="logo">
            <Link to='/'>
              <h2>
                CAR<span>AGE</span>
              </h2>
            </Link>
          </div>
        </div>
        
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav mr-auto">
          <Link to='/'>
            <a href="index.html" className="nav-item nav-link ">
              Home
            </a>
            </Link>
            <Link to='/Services'>
            <a href="service.html" className="nav-item nav-link ">
              Services
            </a>
            </Link>

            <Link to='/About'>
            <a href="about.html" className="nav-item nav-link ">
              About
            </a>
            </Link>
            <Link to='/Contact'>
            <a href="contact.html" className="nav-item nav-link ">
              Contact
            </a>
            </Link>



            
          </div>

       

          <div className="ml-auto">
{is_logged ? 
(
  <div>
  
           {/* <div className='welcome'>welcome</div>  */}

           <a className="btn btn-custom" onClick={logout}>
              Log out
            </a>

</div>

):
(
              

 <Link to='/SignUp'>
            <a className="btn btn-custom" href="#">
              Sign Up
            </a>
            </Link>

              )
}
          </div>
          
          
         
          



         
         
        </div>
      </nav>
    </div>
  </div>
  {/* Nav Bar End */}
</>

</>

    </>
  )
}

export default Navbar
