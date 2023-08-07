import MainBtn from './MainBtn';

function Card3() {
  const cityName = 'San Francisco';
  return (
    <article className='singleCard'>
      <img src='/img/sanfran.jpg' alt='san francisco' className='cardImg' />
      <div className='cardInfo'>
        <h3 className='cardTitle'>{cityName}</h3>
        <p className='cardDate'>Sun 29 Nov 2016</p>
        <p className='text'>
          Praesent tincidunt sed tellus ut rutrum sed vitae justo.
        </p>
        <MainBtn />
      </div>
    </article>
  );
}

export default Card3;
