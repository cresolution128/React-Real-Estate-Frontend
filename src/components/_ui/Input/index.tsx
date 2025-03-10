import classNames from 'classnames';
import React from 'react';

import styles from './style.module.scss';

type Props = {
  label?: string;
  name?: string;
  type?: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
  error?: any;
  register?: any;
  allow?: boolean;
};

const Input: React.FC<Props> = ({
  className = '',
  name,
  type,
  required = false,
  placeholder,
  label,
  error,
  register = {},
}) => {
  return (
    <div className={className}>
      <input
        tabIndex={0}
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder ?? label}
        className={classNames(className, styles.inputStyle, {
          [styles.error]: error,
        })}
        {...register}
      />
      {error ? (
        <div className='flex-1'>
          <p className='mt-1 text-xs text-red-500'>{error.message}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Input;
