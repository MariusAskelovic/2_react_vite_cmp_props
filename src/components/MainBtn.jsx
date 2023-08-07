function MainBtn(props) {
  // props.children - yra tai kas ikelta tarp pradzios ir pabaigos tagu
  return <button className='btn'>{props.children}</button>;
}

export default MainBtn;
