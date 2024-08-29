import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type SocialMediaProps = {
  className?: string;
};

const SocialMedia = ({ className = "" }: SocialMediaProps) => {
  return (
    <ul className={`${className} flex gap-5`}>
      <li>
        <FaFacebook size={24} />
      </li>
      <li>
        <FaInstagram size={24} />
      </li>
      <li>
        <FaLinkedinIn size={24} />
      </li>
      <li>
        <FaXTwitter size={24} />
      </li>
    </ul>
  );
};

export default SocialMedia;
