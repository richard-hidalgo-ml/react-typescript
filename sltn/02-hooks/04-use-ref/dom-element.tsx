import { useRef, FC } from 'react';

export const DomElement: FC = () => {
  const elementRef = useRef<HTMLInputElement>(null);
  const showMessage = (): void => {
    console.log(elementRef.current?.value);
  };
  return (
    <div>
      <button onClick={showMessage}>Show message</button>
      <br />
      <br />
      <input type="text" ref={elementRef} />
    </div>
  );
};
