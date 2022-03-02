import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = (props) => {
  const { detailLink, githubLink } = props;
  return (
    <div className='p-card'>
      <div className='p-card__cover'>
        <div className='p-card__cover-header'></div>
        <div className='p-card__cover-intro'></div>
      </div>
      <div className='p-card__footer'>
        {/* To be replaced with githubLink */}
        <a href='https://github.com/mengchaoli'>
          <FaGithub size='2rem' />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
