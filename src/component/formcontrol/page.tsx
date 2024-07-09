import React, { HTMLInputTypeAttribute, InputHTMLAttributes, useState } from 'react';
import './formcontrol.scss';

const randText = (Math.random() + 1).toString(36).substring(7);

interface FormControlProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'number' | 'image' | 'file' | 'date' | 'email' | 'hidden' | 'password' | 'search' | 'tel' | 'time' | 'url' | 'week' | 'select';
  label?: string;
  props?: any;
  placeholder?: string;
}

export const FormControl = ({ type, label, placeholder, ...props }: FormControlProps) => {
  const _htmlFor = formLabel(label);
  return (
    <div className="flex flex-col position-relative gap-2.5 w-64">
      <label htmlFor="passengers" className="form-label m-0 generalsans-medium textColor text-sm">
        {label}
      </label>
      <input type={type} className="form-control" id={_htmlFor} placeholder={placeholder} {...props} />
    </div>
  );
};

interface FloatingFormControlProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  type: 'text' | 'number' | 'image' | 'file' | 'date' | 'email' | 'hidden' | 'password' | 'search' | 'tel' | 'time' | 'url' | 'week' | 'select';
  placeholder?: string;
  label?: string;
  props?: any;
  error?: boolean;
  success?: boolean;
  icon?: React.ReactNode;
  selectOptions?: React.ReactNode;
  mutedColor?: boolean;
}

export const FloatingLabelFormControl = ({ type, placeholder, label, error = false, success = false, icon, selectOptions, mutedColor, ...props }: FloatingFormControlProps) => {
  const _htmlFor = label?.length ? `${label.toLowerCase().replace(/\s/g, '-')}-${randText}` : '';

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-floating w-100 floating-label position-relative">
      {/* detect if the type is select option or a text */}
      {type === 'select' ? (
        <select className={error ? 'form-select is-invalid' : 'form-select'} id={_htmlFor} {...props}>
          {selectOptions}
        </select>
      ) : (
        <input
          type={showPassword ? 'text' : type}
          className={error ? 'form-control is-invalid' : 'form-control'}
          style={{
            border: error ? '1px solid #dc3545' : success ? '1px solid #4FA2B4' : '1px solid #dee2e6',
            color: mutedColor ? '#ADADAD' : '#333',
            paddingLeft: icon ? '2em' : '.75em',
          }}
          placeholder={placeholder}
          {...props}
        />
      )}

      <label
        htmlFor={_htmlFor}
        style={{
          color: error ? '#dc3545' : success ? '#4FA2B4' : '#adadad',
          zIndex: 0,
          paddingLeft: icon ? '2.2em' : '.75em',
        }}
      >
        {label}
      </label>

      {type === 'password' ? (
        <span className="toggle-show-password satoshi-regular" style={{ right: error ? '40px' : '20px' }} onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? 'Hide' : 'Show'}
        </span>
      ) : null}

      {icon ? (
        <span
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '13px',
          }}
        >
          {icon}
        </span>
      ) : null}
    </div>
  );
};

interface FloatingIconFormControlProps extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
  label?: string;
  props?: any;
  icon: React.ReactNode;
  error?: boolean;
  success?: boolean;
  // style?: any;
  // ref?: React.MutableRefObject<HTMLInputElement>;
}

export const FloatingIconFormControl = ({ type, label, icon, error,success, ...props }: FloatingIconFormControlProps) => {
  const _htmlFor = label?.length ? `${label.toLowerCase().replace(/\s/g, '-')}-${randText}` : '';

  const [showPassword, setShowPassword] = useState(false);
  // console.log(success)
  return (
    <div className="floating-icon-form-control-holder" style={{ position: 'relative', width: '100%' }}>
      {label?.length && (
        <label htmlFor={_htmlFor} className="form-label">
          {label}
        </label>
      )}

      <input
        type={type}
        style={{
          border: error ? '1px solid #dc3545' : success ? '1px solid #4FA2B4' : '1px solid #dee2e6',
        }}
        className={error ? 'form-control galago-form-control is-invalid' : 'form-control galago-form-control'}
        id={_htmlFor}
        {...props}
      />

      <span
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '12px',
        }}
      >
        {icon}
      </span>

      {type === 'password' ? (
        <span className="toggle-show-password satoshi-regular" style={{ right: error ? '40px' : '20px' }} onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? 'Hide' : 'Show'}
        </span>
      ) : null}
    </div>
  );
};

/**
 * helper functions
 */

const formLabel = (label: string | undefined) => {
  if (label === undefined) return;
  return label?.length ? `${label.toLowerCase().replace(/\s/g, '-')}-${randText}` : '';
};
