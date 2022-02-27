import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer'>
      <div className='social-media'>
        <a href='https://github.com/mengchaoli'>
          <FontAwesomeIcon
            className='social-media__item'
            icon={faGithub}
            size='lg'
            bounce
          />
        </a>

        {/*<FontAwesomeIcon
          className='social-media__item'
          icon={faInstagram}
          size='lg'
        />
        <FontAwesomeIcon
          className='social-media__item'
          icon={faTwitter}
          size='lg'
        />*/}
      </div>
      <div className='copy-right'>
        &copy; Copyright {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default Footer;
