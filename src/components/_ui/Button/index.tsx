import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Bars } from 'react-loading-icons';
import styles from './styles.module.scss';

type Props = {
  type?: 'submit' | 'button' | 'reset' | undefined;
  buttonStyle?: 'primary' | 'transparent' | 'dark' | 'contact' | 'white';
  isBig?: boolean;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isPending?: boolean;
  label?: string;
};

const Button: React.FC<Props> = ({
  type = 'submit',
  className = '',
  children,
  isBig = false,
  disabled = false,
  buttonStyle = 'primary',
  onClick,
  isPending = false,
}) => {
  return (
    <button
      // eslint-disable-next-line
      type={type}
      disabled={disabled}
      className={classNames(
        className,
        styles.buttonStyle,
        styles[buttonStyle],
        { [styles.big]: isBig }
      )}
      onClick={onClick}
    >
      {isPending ? (
        <Bars
          width={20}
          height={20}
          stroke={buttonStyle === 'transparent' ? 'black' : 'white'}
        />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
