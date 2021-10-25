import { useEffect, useState } from 'react';

export function withLoading(Component) {
  return (props) => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      setTimeout(() => setLoading(false), 5000);
    }, []);

    return (
      <Component
        {...(props)}
        isLoading={isLoading}
      />
    );
  };
}
