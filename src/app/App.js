//import logo from '../logo.svg';
import React from 'react'
import Hello from '../hello/Hello';
import Length from '../length/Length';
import Form from '../form/Form';
import Range from '../range/Range';
import Posts from '../posts/Posts'
import Test from '../test/Test'
import User from '../user/User'

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
    ],
    show:false
  }

  buttonSetUserVisibility = () => this.setState({show:!this.state.show})

  removePost = (id) => this.setState({posts:this.state.posts.filter(post => post.id !== id)})

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

          <Hello name="Max"/>
          <hr/>

          <Length />
          <hr/>

          <Form />
          <hr/>

          <Range />
          <hr/>

          <Posts posts = {this.state.posts} removePost={this.removePost}/>
          <hr/>

          <User />
          <hr/>

          <Test arg={50}/>
          <hr/>
          
          <button onClick={this.buttonSetUserVisibility}>{this.state.show?"Hide":"Show"} User</button>
          <br/>
          {this.state.show ? <User /> : "Невероятно секретная информация"}
          <hr/>

          </>
        );
      }
}

export default App;
