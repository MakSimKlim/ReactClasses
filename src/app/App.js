import logo from '../logo.svg';
import React from 'react'
import Hello from '../hello/Hello';
import Length from '../length/Length';
import Form from '../form/Form';
import Range from '../range/Range';
import Posts from '../posts/Posts'


import './App.css';

//function App() {
class App extends React.Component
{
  state =
  {
    posts:
    [
      {id:"1", name:"C++ Basics", title:"Процедурное программирование на языке C++"},
      {id:"2", name:"C++ OOP", title:"Объектно-ориентированное программирование на языке C++"},
      {id:"3", name:"Windows via C/C++", title:"Разработка Windows приложений на языке C++"},
    ]
  }
    render()
    {
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
          {/* <Hello name="Max"/>
          <Length />
          <Form />
          <Range /> */}
          
          <Posts posts = {this.state.posts}/>

          </>
        );
      }
}

export default App;
