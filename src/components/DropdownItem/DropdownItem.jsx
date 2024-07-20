export const DropdownItem = (props) => {
  const { text, status } = props;

  return (
    <li className={status}><a href="#">{ text }</a></li>
  )
}
