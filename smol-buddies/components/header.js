import { HiMenu } from "react-icons/hi";

function openNav() {
  document.getElementById("mobile-sidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mobile-sidenav").style.width = "0";
}

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="/monke.png"></img>
      </div>
      <div className="header-navigation">
        <div className="header-links"></div>
        <div className="header-button">
          <HiMenu color="#D4D7F4" size={32} onClick={openNav}></HiMenu>
        </div>
      </div>

      <div id="mobile-sidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}
