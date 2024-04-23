import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [commits, setCommits] = useState([]);

  // useEffect(() => {
  //   const fetchCommits = async () => {
  //     try {
  //       const response = await axios.get('https://api.github.com/repos/{miurakazuma67}/{TimeManager}/commits');
  //       setCommits(response.data);
  //       console.log("commits", commits)
  //     } catch (error) {
  //       console.error('Error fetching data: ', error);
  //     }
  //   };

  //   fetchCommits();
  // }, []); 

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gitのコミット数を確認できるよ！
        </a>
      </header>
    </div>
  );
}

export default App;
