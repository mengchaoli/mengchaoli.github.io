import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <div className='social-media'>
        <a href='https://github.com/mengchaoli'>
          <FaGithub size='2rem' />
        </a>
        <a href='https://www.linkedin.com/in/mengchao-li-79b530179/'>
          <FaLinkedin size='2rem' />
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
