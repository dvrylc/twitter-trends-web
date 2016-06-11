// External imports
// Socket.io
import io from 'socket.io-client';
const socket = io('http://localhost:8000');

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Internal imports
// Styles
import 'flexboxgrid';
import './style.scss';

// Components
import Header from './components/Header';

class App extends React.Component {
  // Constructor
  constructor() {
    super();
    
    // Initial state
    this.state = {
    }
  }
  
  // Lifecycle
  componentWillMount() {
    // Setup socket connection and event listeners
    // On successful connection
    socket.on('connect', () => {
      console.log(`Connected to server at ${socket.io.uri}`);
    });
    
    // On incoming tweet data
    socket.on('tweet', tweet => {
      console.log(tweet);
    });
  }
  
  // Render
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

// Render
ReactDOM.render(<App />, document.getElementById('root'));
