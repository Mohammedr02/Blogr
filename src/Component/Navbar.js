import React,{useState} from "react";
import logo from '../images/logo.svg'

const NavBar=()=>{
 // to change burger classes
 const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
 const [menu_class, setMenuClass] = useState("menu hidden")
 const [isMenuClicked, setIsMenuClicked] = useState(false)
 const [burger_drop, setBurgerDrop]= useState("burger_drop_content hidden")
 const [isDropClicked, setIsDropClicked] = useState(false)
 const [showProductMenu, setShowProductMenu] = useState(false);
 const [showCompanyMenu, setShowCompanyMenu] = useState(false);
 const [showConnectMenu, setShowConnectMenu] = useState(false);
 const updateBurgerDrop = (menu) => {
    // Toggle the visibility of the clicked menu
    if (menu === 'product') {
      setShowProductMenu(prevState => !prevState);
      // Close other menus
      setShowCompanyMenu(false);
      setShowConnectMenu(false);
    } else if (menu === 'company') {
      setShowCompanyMenu(prevState => !prevState);
      // Close other menus
      setShowProductMenu(false);
      setShowConnectMenu(false);
    } else if (menu === 'connect') {
      // Toggle the visibility of the "Connect" menu
      setShowConnectMenu(prevState => !prevState);
      // Close other menus
      setShowProductMenu(false);
      setShowCompanyMenu(false);
    }
  
    setIsDropClicked(!isDropClicked);
  };

 
 // toggle burger menu change
 const updateMenu = () => {
     if(!isMenuClicked) {
         setBurgerClass("burger-bar clicked")
         setMenuClass("menu visible")
     }
     else {
         setBurgerClass("burger-bar unclicked")
         setMenuClass("menu hidden")
     }
     setIsMenuClicked(!isMenuClicked)
 }
    return(
        <div className="background_home">   <nav>
    <div className="left_nav">
    <div className="logo">
        <img src={logo} alt="" />
    </div>
    <div className={menu_class}>
        <div className="burger_menu_content" >
        <div className="burger_text">
        <span onClick={() => updateBurgerDrop('product')}>Product</span>
<span onClick={() => updateBurgerDrop('company')}>Company</span>
<span onClick={() => updateBurgerDrop('connect')}>Connect</span>
        </div>
        <div className="burger_drop">
        <div className="burger_drop_content h1">
        {showProductMenu && (
                  <div >
                    <a href="#">Overview</a>
                    <a href="#">Pricing</a>
                    <a href="#">Marketplace</a>
                    {/* ... other product menu items */}
                  </div>
                )}
        </div>
        <div className="burger_drop_content h2">
        {showCompanyMenu && (
                  <div >
                    <a href="#">About</a>
                    <a href="#">Team</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                    {/* ... other company menu items */}
                  </div>
                )}
        </div>
        {showConnectMenu && (
                  <div >
                       <a>Contact</a>
                       <a>Newsletter</a>
                       <a>LinkedIn</a>
                  </div>
                )}
        </div>
        
        <div><hr  /></div>
            <div className="burger_btn">
            <button className="btn_log burger-b">Login</button>
            <button className="burger-b2">Sign Up</button>
            </div>
            
        </div>
        
        
        
    </div>
    <div className="menu ">
    
    <div class="dropdown">
  <div className="arrow_menu"><span >Product </span> <div className="arrow"> </div></div>
  <div class="dropdown-content">
    <a href="#">Overview</a>
    <a href="#">pricing</a>
    <a href="#">Marketplace</a>
    <a>Features</a>
    <a>integration</a>
  </div>
  </div>
  <div className="dropdown">
  <div className="arrow_menu"><span >Company </span> <div className="arrow"> </div></div>
  <div class="dropdown-content">
  
  <a href="#">About</a>
  <a href="#">Team</a>
  <a href="#">Blog</a>
  <a>Careers</a>
</div>
  </div>
 
 <div className="dropdown">
 <div className="arrow_menu"><span >Connect </span> <div className="arrow"> </div></div>
  <div class="dropdown-content">
    <a>Contact</a>
    <a>Newsletter</a>
    <a>LinkedIn</a>
  </div>

 </div>
  
    </div>
   </div>
   
<div className="Nav_btn">
<button className="btn_log">Log In</button>
<button className="btn_Sign">Sign Up</button>

<div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
                
</div>

    </nav>

<div className="Section1"> 
    
<div className="Home">
<div className="Home_text">
    <h1>A modern publishing platform</h1>
    <p>Grow your audience and build your online brand</p>
</div>
<div className="Home_btn">
    <button className="btn_Sign1">Start for Free</button>
    <button className="btn_learn">Learn More</button>
</div>
</div> 
</div>
</div>
    )
        
    
}

export default NavBar