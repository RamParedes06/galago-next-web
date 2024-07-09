import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  label: string | React.ReactNode;
  icon?: React.ReactNode;
  _className?: string;
  props?: any;
  btn?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  size?: 'sm' | 'lg' | 'xl';
}

export const GalagoButton = ({ disabled, btn, size, label, icon, _className, ...props }: ButtonProps) => {
  return (
    <button
      className={`btn ${btn === undefined ? 'btn-primary' : `btn-${btn}`} ${
        size !== undefined ? `btn-${size}` : ''
      } w-100 rounded-xl flex align-items-center justify-content-center px-4 py-[12px] ${_className}`}
      disabled={disabled}
      {...props}
      style={{fontWeight: 600}}
    >
      {icon} {label}
    </button>
  );
};
