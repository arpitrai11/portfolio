import React from 'react';
import { type DetailedProject } from '../../data/portfolioData';
import { ProjectsBucket } from '../ProjectsBucket';

interface ProjectsTabProps {
  onSelectProject?: (project: DetailedProject) => void;
  filterProjectIds?: string[] | null;
  onClearFilter?: () => void;
}

export const ProjectsTab: React.FC<ProjectsTabProps> = ({
  onSelectProject,
  filterProjectIds,
  onClearFilter,
}) => {
  return (
    <ProjectsBucket
      onSelectProject={onSelectProject}
      filterProjectIds={filterProjectIds}
      onClearFilter={onClearFilter}
    />
  );
};
