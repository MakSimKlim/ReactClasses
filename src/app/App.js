import logo from '../logo.svg';
import Hello from '../hello/Hello';
import Length from '../length/Length';
import Form from '../form/Form';
import Range from '../range/Range';


import './App.css';

function App() {

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Hello name="Max"/>
    <Length />
    <Form />
    <Range />
    </>
  );
}

export default App;
