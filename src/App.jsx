import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
function App() {
  return (
    <>
      <Navbar/>
      <section className='holder-container'>
        <SideNav/>
      </section>
    </>
  );
}

export default App;
