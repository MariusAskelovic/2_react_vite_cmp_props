import MainBtn from './MainBtn';

function Card1(props) {
  const cityName = props.city;
  return (
    <article className='singleCard'>
      <img src={props.heroImage} alt='new york' className='cardImg' />
      <div className='cardInfo'>
        <h3 className='cardTitle'>{cityName}</h3>
        <p className='cardDate'>{props.date}</p>
        <p className='text'>{props.text}</p>
        <MainBtn>Pirkti bilietus</MainBtn>
      </div>
    </article>
  );
}

export default Card1;
