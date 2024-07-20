import { useState } from 'react';

export const Dropdown = () => {
  const [state, setState] = useState(false);

  const handleClick = (e) => {
    console.log('state=', state);
    (state) ? setState(false) : setState(true);
  }


  return (
    <div data-id="wrapper" className="dropdown-wrapper open">
      <button data-id="toggle" className="btn" onClick={handleClick}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
    </div>
  )
}
