import { FC, ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  spinner?: {
    highlight: boolean;
    size: string;
    modifier: string;
  };
}

const defaultProps: Partial<ButtonProps> = {
  size: 'medium',
  spinner: {
    highlight: true,
    size: 'xsmall',
    modifier: 'inline',
  },
};

const Button: FC<ButtonProps> = ({
  className,
  children,
  size,
  spinner,
  ...props
}) => (
  <button
    className={`${className} button button-${size}`}
    {...props}
  >
    {spinner && <span className={`spinner-${spinner.modifier}`} />}
    {children}
  </button>
);

Button.defaultProps = defaultProps;

export { Button };
