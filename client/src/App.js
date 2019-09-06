import React from 'react';
import './App.css';
import axios from 'axios';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        console.log(response);
        this.setState({ data: response.data});
        console.log(this.state, "data from state")

      });

  }

  render() {
    return (
      <div>
        <h1>Go US Soccer!!!</h1>
        <div>
          {this.state.data.map(player => {
            return (
              <div key={player.id}>
                <h3>{player.name}</h3>
                <p>{player.country}</p>
              </div>
            );
          
          })}
        </div>
      </div>
    )
  }
}

export default App;
