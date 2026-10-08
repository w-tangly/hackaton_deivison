import React from 'react';

interface ToastProps {
  title: string;
  message: string;
  isVisible: boolean;
  type?: 'success' | 'loading';
}

const Toast: React.FC<ToastProps> = ({ title, message, isVisible, type = 'success' }) => {
  if (!isVisible) return null;

  const iconColorClass =
    type === 'success'
      ? 'bg-secondary-container text-on-secondary-container'
      : 'bg-surface-variant text-primary';

  return (
    <div className="fixed bottom-6 right-6 max-w-sm p-4 rounded-2xl bg-surface-container-lowest shadow-xl border-0 flex items-center gap-3 translate-y-24 opacity-0 pointer-events-none transition-all duration-300 z-50 animate-fade-in-up">
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${iconColorClass}`}>
        <span className="material-symbols-outlined text-[20px]">
          {type === 'success' ? 'check' : 'sync'}
        </span>
      </div>
      <div className="flex flex-col min-w-0">
        <span className="font-label-md text-label-md text-on-surface font-bold">{title}</span>
        <span className="font-body-sm text-body-sm text-on-surface-variant truncate">{message}</span>
      </div>
    </div>
  );
};

export default Toast;