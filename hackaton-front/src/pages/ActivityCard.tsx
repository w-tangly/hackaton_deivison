import React from 'react';
import type { ActivityMode } from './index';

interface ActivityCardProps {
  activity: ActivityMode;
  onStart: (activity: ActivityMode) => void;
  selectedDifficulty?: string;
  onDifficultyChange?: (difficulty: string) => void;
  difficulties?: Array<{ value: string; label: string; xp: number }>;
  showDifficulty?: boolean;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  onStart,
  selectedDifficulty = 'facil',
  onDifficultyChange,
  difficulties,
  showDifficulty = false,
}) => {
  const getIconColor = (type: string) => {
    switch (type) {
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

  return (
    <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-lg transition-all flex flex-col justify-between gap-6 relative overflow-hidden group">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${getIconColor(activity.icon)}`}>
            <span className="material-symbols-outlined text-[24px]">{activity.icon}</span>
          </div>
          <span className="font-mono text-label-sm text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded">
            {activity.endpoint}
          </span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface">{activity.title}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          {activity.description}
        </p>
      </div>

      {showDifficulty && difficulties && onDifficultyChange && (
        <div className="space-y-2">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">
            Nível de desafio:
          </span>
          <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-surface-container">
            {difficulties.map((diff) => (
              <button
                key={diff.value}
                className={`py-1.5 text-center rounded-lg font-label-sm text-label-sm font-semibold transition-all ${
                  selectedDifficulty === diff.value
                    ? 'bg-surface-container-lowest text-primary shadow-sm'
                    : 'text-on-surface-variant'
                }`}
                onClick={() => onDifficultyChange(diff.value)}
              >
                {diff.label}
                <span className="block opacity-75 text-[10px]">+{diff.xp} XP</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {!showDifficulty && (
        <div className="p-3 rounded-xl bg-secondary-container-40 flex items-center gap-2 text-on-secondary-container">
          <span className="material-symbols-outlined text-[20px] text-secondary">bolt</span>
          <span className="font-label-md text-label-md font-bold">+{activity.xpReward} XP por acerto rápido</span>
        </div>
      )}

      <button
        className="w-full py-3 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow hover:bg-primary-container transition-all flex items-center justify-center gap-2"
        onClick={() => onStart(activity)}
      >
        <span>{showDifficulty ? 'Começar Quiz' : activity.endpoint.includes('flashcard') ? 'Revisar Agora' : 'Começar Desafio'}</span>
        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </button>
    </div>
  );
};

export default ActivityCard;