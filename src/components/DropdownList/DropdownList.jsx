import { DropdownItem } from "../DropdownItem/DropdownItem";
import { useState } from 'react';

const array = [
  'Profile Information',
  'Change Password',
  'Become PRO',
  'Help',
  'Log Out',
];

export const DropdownList = () => {
  let cellIndex = 0;
  const [state, setState] = useState(array[cellIndex]);

  const handleClick = (event) => {
    const { target } = event;
    const cell = array.findIndex((item) => {
      return item === target.textContent
    })
    cellIndex = cell;
    setState(array[cellIndex]);
  } 

  return (
    <ul data-id="dropdown" className="dropdown" onClick={handleClick}>
      {
        array.map((name, index) => {
          const status = (name === state) ? 'active' : '';
          return <DropdownItem key={`menu-${index}`} text={name} status={status} />
        })
      }
    </ul>
  )
}
