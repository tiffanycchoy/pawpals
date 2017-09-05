import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignUpStart from './components/SignUpStart';
import Browse from './components/Browse';
import Calendar from './components/Calendar';
import Payment from './components/Payment.jsx';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to='/signup/start'>Signup</Link></li>
              <li><Link to='/browse'>Browse Walks</Link></li>
<<<<<<< HEAD
	      <li><Link to='/walker'>Walker</Link></li>
||||||| merged common ancestors
=======
              <li><Link to ='/payment'>Payment</Link></li>
>>>>>>> adding a temporary link to payment
            </ul>

            <Route exact path="/home" render={() => (
              <h1>Hello World from React</h1>
            )}/>
            <Route exact path="/signup/start" component={SignUpStart}/>
            <Route exact path="/browse" component={Browse}/>
<<<<<<< HEAD
            <Route exact path="/walker" component={Calendar}/>
||||||| merged common ancestors
=======
            <Route exact path="/payment" component={Payment}/>
>>>>>>> adding a temporary link to payment
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
