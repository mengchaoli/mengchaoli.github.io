const AboutPage = () => {
  return (
    <div className='about-wrapper'>
      <div className='center'>
        <div className='about-main'>
          <div className='about-main__experience'>
            <div className='about-main-title about-main__exp--title'>
              /Experience
            </div>
            <p>
              I am now working as a Full Stack Engineer/Solutions Engineer at a
              startup company based in San Francisco. We are using{' '}
              <span>React, Node.js, MySQL</span>
            </p>
          </div>
          <div className='about-main__education'>
            <div className='about-main-title about-edu--title'>/Education</div>
            <p>
              Master of Science in Software Engineering, San Jose State
              University, California
            </p>
            <p>
              Bachelor of Science in Software Engineering, Hunan University,
              Hunan, China
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
