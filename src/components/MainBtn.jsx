function MainBtn(props) {
  const btnClasses = props.outline === true ? 'btn btnOutline' : 'btn'
  // props.children - yra tai kas ikelta tarp pradzios ir pabaigos tagu
  return <button className={btnClasses}>{props.children}</button>;
}

export default MainBtn;
