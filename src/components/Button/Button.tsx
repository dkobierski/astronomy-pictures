import React from 'react';
import cn from 'classnames';

import './Button.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button type="button" className={cn('button', className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
