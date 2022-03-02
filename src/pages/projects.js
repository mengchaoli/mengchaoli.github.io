import React from 'react';
import ProjectCard from '../components/project-card';
const projectList = [
  { detailLink: '123', coverImg: '123' },
  { detailLink: '123', coverImg: '123' },
  { detailLink: '123', coverImg: '123' },
];
const ProjectPage = () => {
  // we can put this in a config file later
  return (
    <div className='project-wrapper'>
      {projectList.map((project) => (
        <ProjectCard />
      ))}
    </div>
  );
};

export default ProjectPage;
