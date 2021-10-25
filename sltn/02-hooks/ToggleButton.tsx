import { useState, FC } from 'react';
import classnames from 'classnames';

interface ToggleButtonProps {
  initialActive: boolean
}

const ToggleButton: FC<ToggleButtonProps> = ({ initialActive }) => {
  const [checked, setChecked] = useState<boolean>(initialActive);
  return (
    <label
      htmlFor="toggle"
      className={classnames('toggle', { 'toggle-active': checked })}
      onChange={() => setChecked(!checked)}
    >
      <input id="toggle" type="checkbox" className="toggle-input" />
      <span className="toggle-internal" />
    </label>
  );
};

export { ToggleButton };
