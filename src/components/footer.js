import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer'>
      <div className='social-media'>
        <FontAwesomeIcon
          className='social-media__item'
          icon={faGithub}
          size='lg'
          bounce
        />
        <FontAwesomeIcon
          className='social-media__item'
          icon={faInstagram}
          size='lg'
        />
        <FontAwesomeIcon
          className='social-media__item'
          icon={faTwitter}
          size='lg'
        />
      </div>
      <div className='copy-right'>
        <p>&copy; Copyright</p>
      </div>
    </div>
  );
}

export default Footer;
