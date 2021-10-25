import { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import { withLoading, WithLoading } from './withLoading';

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

const Button: FC<WithLoading<ButtonProps>> = ({
  className,
  disabled,
  onClick,
  children,
  size,
  spinner,
  type,
  isLoading,
  ...props
}) => (
  <button
    className={`${className} button button-${size}`}
    type={type}
    disabled={disabled && isLoading}
    onClick={onClick}
    {...props}
  >
    {spinner && <span className={`spinner-${spinner.modifier}`} />}
    {children}
  </button>
);

Button.defaultProps = defaultProps;

const LoadingButton = withLoading(Button);

export { Button, LoadingButton };
