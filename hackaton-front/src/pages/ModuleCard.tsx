import React from 'react';
import type { ModuleProgress } from './index';

interface ModuleCardProps {
  module: ModuleProgress;
  onResume: (module: ModuleProgress) => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onResume }) => {
  const progressPercent = Math.round((module.completedLessons / module.totalLessons) * 100);

  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-surface-variant text-primary';
      case 'secondary':
        return 'bg-secondary-container text-on-secondary-container';
      case 'tertiary':
        return 'bg-tertiary-fixed text-tertiary';
      default:
        return 'bg-surface-container-highest text-on-surface-variant';
    }
  };

  const getProgressColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary';
      case 'secondary':
        return 'bg-secondary';
      case 'tertiary':
        return 'bg-tertiary';
      default:
        return 'bg-primary';
    }
  };

  return (
    <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getIconColor(module.color)}`}>
            <span className="material-symbols-outlined text-[20px]">{module.icon}</span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">{module.title}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{module.description}</p>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
          {module.completedLessons}/{module.totalLessons} aulas
        </span>
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between items-center text-on-surface-variant">
          <span className="font-label-sm text-label-sm">Progresso do módulo</span>
          <span className="font-label-sm text-label-sm font-bold text-primary">{progressPercent}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 ease-out ${getProgressColor(module.color)}`}
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">schedule</span> {module.estimatedTime}
        </span>
        <button
          className="px-4 py-2 rounded-xl bg-surface-container-high hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md transition-all"
          onClick={() => onResume(module)}
        >
          Retomar
        </button>
      </div>
    </div>
  );
};

export default ModuleCard;