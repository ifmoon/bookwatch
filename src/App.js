import BackgroundWhite from './BackgroundWhite';
import BackgroundBlack from './BackgroundBlack';
import {Switch, Route, Link} from 'react-router-dom'
import BackgroundBrown from './BackgroundBrown';
import './App.css'

function App() {
  return (
    <div style={{minWidth: 1000}}>
      <Switch>
        <Route path="/white">
          <BackgroundWhite/>
        </Route>
        <Route path="/black">
          <BackgroundBlack />
        </Route>
        <Route path="/brown">
          <BackgroundBrown />
        </Route>
      </Switch>
      <div style={{position: 'fixed', bottom: 0, left: 0,display: 'flex', height: 50,width: 500, justifyContent: 'space-around',alignItems: 'center'}}>
        <Link to={"/white"} style={{fontSize: '18pt'}}>사라스바티</Link>
        <Link to={"/black"} style={{fontSize: '18pt'}}>크투가</Link>
        <Link to={"/brown"} style={{fontSize: '18pt'}}>페르세포네</Link>
      </div>
    </div>
  );
}

export default App;
