import React from 'react';

import ProjectItem from './ProjectItem'
import { selectMedia, selectProjectItem } from '@/utils/selectors';

function ProjectItemContainer({
  item
}) {

  const { projectName, projectDescription, projectThumbnail, techStack, previewLink, codeLink  } = selectProjectItem(item) || {};
  const { url: projectThumbnailUrl } = selectMedia(projectThumbnail);

  return (
    <ProjectItem
      projectName={projectName}
      projectDescription={projectDescription}
      projectThumbnailUrl={`https:${projectThumbnailUrl}`}
      techStack={techStack}
      previewLink={previewLink}
      codeLink={codeLink}
    />
  )
}

export default ProjectItemContainer