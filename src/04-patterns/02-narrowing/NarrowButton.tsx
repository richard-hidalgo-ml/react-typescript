import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

type Overload = {
  (props: ButtonProps): React.ReactElement;
  (props: AnchorProps): React.ReactElement;
};

const hasHref = (props: ButtonProps | AnchorProps): props is AnchorProps => 'href' in props;

export const Button: Overload = (props: ButtonProps | AnchorProps) => {
  if (hasHref(props)) return <a className="button" {...props} />;
  return <button className="button" {...props} />;
};

export const Usage: React.FC = () => (
  <Button>Click aquí</Button>
);
