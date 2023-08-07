// import logo from './assets/logo.svg';
import './style/common.css';
import './style/App.css';
import './style/responsive.css';
import CardList from './components/CardList';
import Header from './components/layout/Header';
import MainBtn from './components/MainBtn';
import TitlesMap from './components/TitlesMap';
// export import Card2


function App() {
  // const now = new Date();
  // const formatedDate = now.toLocaleString('LT-lt', { dateStyle: 'full' });
  const showTitles = true;
  return (
    <div className='App container'>
      <Header />
      {/* daznai naudojama atvaizduoti arba neatvaizduoti elementams */}
      {/* if showTitles === true */}
      {showTitles && <TitlesMap />}
      {/* else */}
      {!showTitles && <h2>Titles siuo metu nerodomi</h2>}

      <MainBtn outline>Light mode</MainBtn>
      {false && <CardList />}
    </div>
  );
}

export default App;