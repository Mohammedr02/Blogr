import logo from '../images/logo.svg'

const Footer=()=>{
    // to change burger classes
    
       return(
        <div className="Footer">
        <div className="Footer_content">
        <div className="Logo">
        <img src={logo} alt="" />
        </div>
        
        <div className="list">
        <div className="bold">Product</div>
        <a>Overview</a>
        <a>pricing</a>
        <a>Marketplace</a>
        <a>Features</a>
        <a>integration</a>
        </div>
        
        <div className="list">
        <div className="bold">Company</div>
        <a>About</a>
        <a>Team</a>
        <a>Blog</a>
        <a>Careers</a>
        
        </div>
        
        <div className="list">
        <div className="bold">Connect</div>
        <a>Contact</a>
        <a>Newsletter</a>
        <a>LinkedIn</a>
        
        </div>
        
        </div>
        
        
        </div>
       )
           
       
   }
   
   export default Footer