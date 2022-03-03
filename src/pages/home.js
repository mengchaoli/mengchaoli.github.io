import { FaRegEnvelope, FaLinkedin } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className='home-wrapper'>
      <div className='center'>
        Hi! My name is
        <div className='name'>
          Mengchao <span className='name-lastname'>Li</span>
        </div>
        <p className='intro'>
          I am a <strong>Software Engineer</strong> and{' '}
          <strong>Full Stack Developer</strong>
          <br />
          <br />
          This site is built using <em>create-react-app</em> and is mostly under
          construction now. I will keep polishing, adding more content and
          features to it.
          <br />
          <br />
        </p>
        <p className='intro'>
          If you have any questions or want to know more about me, feel free to
          contact via{'  '}
          <a href='https://www.linkedin.com/in/mengchao-li-79b530179/'>
            <FaLinkedin size='1.5rem' />
          </a>
          {'   '}
          or{'   '}
          <a href='mailto:mengchaoli0528@gmail.com/'>
            <strong>Email</strong>
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default HomePage;
