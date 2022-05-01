import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <AiOutlineTwitter></AiOutlineTwitter>
        <FaDiscord></FaDiscord>
      </div>

      <div className="footer-text">© SMOL BUDDIES, 2022</div>
    </div>
  );
}
