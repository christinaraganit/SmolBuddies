import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import PixelButton from "./pixel-button";

function openNav() {
  document.getElementById("mobile-sidenav").style.width = "100vw";
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
          <HiMenuAlt3 color="#D4D7F4" size={32} onClick={openNav}></HiMenuAlt3>
        </div>
      </div>

      <div id="mobile-sidenav" class="sidenav">
        <HiX
          className="closebtn"
          onClick={closeNav}
          color="#D4D7F4"
          size={32}
        ></HiX>

        <a href="#">About</a>
        <a href="#">FAQ</a>
        <a href="#">Minecraft</a>
        <a href="#">Discord</a>
        <a href="#">Twitter</a>
        <PixelButton text="hewwo"></PixelButton>
      </div>
    </div>
  );
}
