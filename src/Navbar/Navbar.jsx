import React from "react";
import sam from "../Resources/logo.jpg";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  React.useEffect(() => {
    document.getElementById("menubtn").addEventListener("click", () => {
      document.getElementById("n-right").style.top = "0px";
      document.getElementById("closebtn").style.display = "flex";
    });
    document.getElementById("closebtn").addEventListener("click", close);
  }, [window.innerWidth]);
  function close() {
    document.getElementById("n-right").style.top = "-1200px";
    document.getElementById("closebtn").style.display = "none";
  }

  const large = (
    <div className="element">
      <div id="menubtn" className="menubtn">
        <i class="material-icons">dehaze</i>
      </div>
      <div id="closebtn" className="closebtn">
        <i class="material-icons">close</i>
      </div>
      <div id="n-right" className="n-right">
        <Link
          onClick={close}
          spy={true}
          to="Home"
          smooth={true}
          activeClass="activeClass"
        >
          <li>
            {/* <i class="material-icons">home</i> */}
            <span>Home</span>
          </li>
        </Link>
        <Link
          onClick={close}
          spy={true}
          to="About"
          smooth={true}
          activeClass="activeClass"
        >
          <li>
            {/* <i class="material-icons">dehaze</i> */}
            <span>Network</span>
          </li>
        </Link>
        {/* <Link
          onClick={close}
          spy={true}
          to="Projects"
          smooth={true}
          activeClass="activeClass"
        >
          <li>
            <i class="material-icons">lightbulb_outline</i>
            <span>Projects</span>
          </li>
        </Link> */}
        <Link
          onClick={close}
          spy={true}
          to="Contact"
          smooth={true}
          activeClass="activeClass"
        >
          <li>
            {/* <i class="material-icons">contacts</i> */}
            <span>Location</span>
          </li>
        </Link>
        <Link
          onClick={close}
          spy={true}
          to="Join"
          smooth={true}
          activeClass="activeClass"
        >
          <li>
            {/* <i class="devicon-react-original"></i> */}
            <span>Contact</span>
          </li>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="navbar">
      <div className="n-left">
        <img src={sam} alt="SAM" />
        <span>Sunil Cargo</span>
      </div>

      {large}
      {/* <div className="fade"></div> */}
    </div>
  );
};

export default Navbar;

// const [size, setSize] = React.useState(micro);
// React.useEffect(() => {
//   function watchWidth() {
//     setSize(() => {
//       if (window.innerWidth > 850) {
//         return large;
//       } else {
//         return bar;
//       }
//     });
//   }
//   let bar = micro

//   function toggle(){
//     if(bar === micro){
//       bar = small
//     }else{
//       bar = micro
//     }
//     watchWidth()
//   }
//   document.getElementById("menubtn").addEventListener("click", toggle )
//   window.addEventListener("resize", watchWidth);
//   watchWidth()
//   console.log('da');
// }, [window]);

// const micro = (
//   <div id="menubtn" className="menubtn">
//     <i class="material-icons">dehaze</i>
//   </div>
// );

// const small = (
//   <div className="n-right-s">
//     <Link spy={true} to="Home" smooth={true} activeClass="activeClass">
//       <li>
//         <i class="material-icons">home</i>
//         <span>Home</span>
//       </li>
//     </Link>
//     <Link spy={true} to="About" smooth={true} activeClass="activeClass">
//       <li>
//         <i class="material-icons">dehaze</i>
//         <span>About</span>
//       </li>
//     </Link>
//     <Link spy={true} to="Projects" smooth={true} activeClass="activeClass">
//       <li>
//         <i class="material-icons">lightbulb_outline</i>
//         <span>Projects</span>
//       </li>
//     </Link>
//     <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
//       <li>
//         <i class="material-icons">contacts</i>
//         <span>Contact</span>
//       </li>
//     </Link>
//     <Link spy={true} to="Join" smooth={true} activeClass="activeClass">
//       <li>
//         <i class="devicon-react-original"></i>
//         <span>Join</span>
//       </li>
//     </Link>
//   </div>
// );
