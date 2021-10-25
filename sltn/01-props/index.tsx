import { FC } from 'react';
import { Button } from './Button';

const Main: FC = () => (
  <Button
    size="medium"
    onClick={() => alert('hola')}
  >
    Haz click
  </Button>
);

export default Main;
