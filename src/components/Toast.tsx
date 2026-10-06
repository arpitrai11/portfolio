import React, { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClear: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClear }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClear();
    }, 2400);
    return () => clearTimeout(timer);
  }, [message, onClear]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-[var(--border-medium)] bg-[var(--bg-card)] text-[var(--text-primary)] shadow-2xl font-mono text-xs animate-in slide-in-from-bottom-2 duration-200"
    >
      <CheckCircle2 size={15} className="text-[var(--accent)] shrink-0" />
      <span className="font-medium">{message}</span>
    </div>
  );
};
