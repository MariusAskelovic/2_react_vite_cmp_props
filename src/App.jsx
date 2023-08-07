// import logo from './assets/logo.svg';
import './style/common.css';
import './style/App.css';
import './style/responsive.css';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Header from './components/layout/Header';

// funkcinis komponentas yra funkcija
// prasideda didziaja raide
// grazina jsx

function App() {
  return (
    <div className='App container'>
      <Header />
      <div className='cardsList grid3'>
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}

export default App;
