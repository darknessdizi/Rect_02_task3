import { useState } from 'react';
import { DropdownList } from '../DropdownList/DropdownList';

export const Dropdown = () => {
  const [state, setState] = useState(false);
  const name = (state) ? "dropdown-wrapper open" : "dropdown-wrapper";

  const handleClick = (e) => {
    (state) ? setState(false) : setState(true);
  }

  return (
    <div data-id="wrapper" className={name}>
      <button data-id="toggle" className="btn" onClick={handleClick}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList />
    </div>
  )
}
