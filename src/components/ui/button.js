import React from 'react';
import clsx from 'clsx';

export function Button({ className = '', variant = 'solid', children, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-full px-4 py-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    solid: 'bg-gradient-to-r from-emerald-500 to-lime-600 text-white hover:from-emerald-600 hover:to-lime-700 focus:ring-emerald-400',
  outline: 'border-2 border-border-primary text-text-secondary hover:border-accent-lime hover:text-accent-lime focus:ring-accent-lime glass-effect',
  plain: ''
  };
  return (
  <button className={clsx(base, variants[variant] ?? '', className)} {...props}>
      {children}
    </button>
  );
}
