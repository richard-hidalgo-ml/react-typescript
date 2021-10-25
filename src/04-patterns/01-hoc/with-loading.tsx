import { ComponentType, useEffect, useState } from 'react';

interface LoadingProps {
  isLoading: boolean;
}

export function withLoading<T>(Component: ComponentType<T>) {
  return (props: Omit<T, keyof LoadingProps>) => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      setTimeout(() => setLoading(false), 5000);
    }, []);

    return (
      <Component
        {...(props as T)}
        isLoading={isLoading}
      />
    );
  };
}

export type WithLoading<Props> = Props & LoadingProps
