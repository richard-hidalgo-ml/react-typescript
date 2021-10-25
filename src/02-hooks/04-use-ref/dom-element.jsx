import { useRef } from 'react';

export const DomElement = () => {
  const elementRef = useRef();
  const showMessage = () => console.log(elementRef.current.value);
  return (
    <div>
      <button onClick={showMessage}>Show message</button>
      <br />
      <br />
      <input type="text" ref={elementRef} />
    </div>
  );
};
