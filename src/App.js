import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { createClient } from 'contentful';

function App() {

  const [blogPosts, setBlogPosts] = useState([]);

  const client = createClient({space: "auxbdc5uqthn", accessToken: "fg4gnvrqr0Fi8tUtBSZ3ic5aiSkf-hU6nYBHvTYcGdc"})

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries)
          setBlogPosts(entries)
        })
      } catch (error) {
        console.log("error")
      }
    }

    getAllEntries();
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

          testing testing
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
