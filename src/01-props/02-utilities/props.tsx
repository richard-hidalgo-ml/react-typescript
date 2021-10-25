import React, { FC } from 'react';

interface ButtonProps {
  type: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}

/* interface ExtendButtonProps extends ButtonProps {
  loading: boolean;
}

const ExtendButton: FC<ExtendButtonProps> = ({
  loading, type, size, disabled,
}) => <button>Click</button>; */

// Pick
/* interface PickButtonProps extends Pick<ButtonProps, 'size'> {
  loading: boolean;
}

const PickButton: FC<PickButtonProps> = ({
  loading, type, size, disabled,
}) => <button>Click</button>; */

// Omit
/* interface OmitButtonProps extends Omit<ButtonProps, 'size'> {
  loading: boolean;
}

const OmitButton: FC<OmitButtonProps> = ({
  loading, type, size, disabled,
}) => <button>Click</button>; */

// Partial
/* interface PartialButtonProps extends Partial<ButtonProps> {
  loading: boolean;
}

const PartialButton: FC<PartialButtonProps> = ({
  loading, type, size, disabled,
}) => <button>Click</button>; */

/* interface RequiredButtonProps extends Required<ButtonProps> {
  loading: boolean;
}

const RequiredButton: FC<RequiredButtonProps> = ({
  loading, type, size, disabled,
}) => <button>Click</button>; */
