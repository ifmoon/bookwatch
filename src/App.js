import BackgroundWhite from './BackgroundWhite';
import BackgroundBlack from './BackgroundBlack';
import {Switch, Route, Link} from 'react-router-dom'
import BackgroundBrown from './BackgroundBrown';

function App() {
  return (
    <div>
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
        <Link to={"/white"}>엄마는외계인</Link>
        <Link to={"/black"}>아몬드봉봉</Link>
        <Link to={"/brown"}>슈팅스타</Link>
      </div>
    </div>
  );
}

export default App;
