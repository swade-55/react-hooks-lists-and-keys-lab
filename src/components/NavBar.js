import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const newLinks = links.map(linkObj=>{
    return <a key = {linkObj} href= {`#${linkObj}`} >{linkObj}</a>
  })
  return <nav>{/* display an <a> tag for each link here */}
  
  {newLinks}
  </nav>;
}

export default NavBar;
