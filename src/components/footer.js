import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <div className='social-media'>
        <a href='https://github.com/mengchaoli'>
          <FaGithub size='2rem' />
        </a>

        {/*<FontAwesomeIco
          icon={faInstagram}
          size='lg'
        />
        <FontAwesomeIco
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
