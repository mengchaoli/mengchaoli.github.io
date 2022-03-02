import { FaMobileAlt, FaRegEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className='contact-wrapper'>
      <h1>Contact Me</h1>
      <div className='contact-content'>
        <div className='contact-content__email'>
          <FaRegEnvelope size='2rem' />
          <p>mengchaoli0528@gmail.com</p>
        </div>
        <div className='contact-content__tel'>
          <FaMobileAlt size='2rem' />
          <p>+1 (123)-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
