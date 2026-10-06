import React from 'react';
import { HomeBlueprint } from '../HomeBlueprint';
import type { DetailedProject } from '../../data/portfolioData';

interface HomeTabProps {
  onSelectTab: (tabId: string) => void;
  onOpenResume: () => void;
  onSelectProject?: (project: DetailedProject) => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({
  onSelectTab,
  onOpenResume,
}) => {
  return (
    <div className="relative w-full">
      {/* Blueprint Architectural Hero Section */}
      <HomeBlueprint
        onSelectTab={onSelectTab}
        onOpenResume={onOpenResume}
      />
    </div>
  );
};
