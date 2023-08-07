// import logo from './assets/logo.svg';
import './style/common.css';
import './style/App.css';
import './style/responsive.css';
import Card1 from './components/Card1';
import Header from './components/layout/Header';

// funkcinis komponentas yra funkcija
// prasideda didziaja raide
// grazina jsx

function App() {
  return (
    <div className='App container'>
      <Header />
      <div className='cardsList grid3'>
        <Card1 city="New York" heroImage='img/newyork.jpg' date='Fri 27 Nov 2016' text='Praesent tincidunt sed tellus ut rutrum sed vitae justo.' />
        <Card1 city="Paris" heroImage='img/paris.jpg' date='Fri 27 Nov 2016' text='Praesent tincidunt sed tellus ut rutrum sed vitae justo.' />
        <Card1 city="San Francisco" heroImage='img/sanfran.jpg' date='Fri 27 Nov 2016' text='Praesent tincidunt sed tellus ut rutrum sed vitae justo.' />
      </div>
    </div>
  );
}

export default App;
