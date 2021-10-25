import React from 'react';

interface Props<C extends React.ElementType> {
  as?: C
  children: React.ReactNode;
}

type ButtonProps<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentProps<C>, keyof Props<C>>

export const Button = <C extends React.ElementType = 'button'>({
  as,
  children,
  ...other
}: ButtonProps<C>): React.ReactElement => {
  const Component = as || 'button';
  return (
    <Component className="button" {...other}>
      {children}
    </Component>
  );
};

export const Usage: React.FC = () => (
  <Button>Click aquí</Button>
);
