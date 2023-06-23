import React from "react";
import { SwitchButton, SwitchInput, SwitchLabel } from "./ToggleButtonStyles";


const ToggleButton = ({ id, toggled, onChange, }) => {
  return (
    <>
      <SwitchInput
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel htmlFor={id} data-testid="switch-label">
        <SwitchButton data-testid="switch-button">
            {toggled ? 'E' :'S'}
        </SwitchButton>
      </SwitchLabel>
    </>
  );
};

export default ToggleButton;