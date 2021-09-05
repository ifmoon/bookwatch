import BackgroundWhite from './BackgroundWhite';
import BackgroundBlack from './BackgroundBlack';
import { Switch, Route, Link } from 'react-router-dom'
import BackgroundBrown from './BackgroundBrown';
import Intro from './Intro'
import './App.css'

function App() {
  return (
    <div style={{ minWidth: 1000 }}>
      <Switch>
        <Route path="/white">
          <BackgroundWhite />
        </Route>
        <Route path="/black">
          <BackgroundBlack />
        </Route>
        <Route path="/brown">
          <BackgroundBrown />
        </Route>
        <Route path="/">
          <Intro />
        </Route>
      </Switch>
      <div style={{ position: 'fixed', bottom: 0, left: 0, display: 'flex', height: 50, width: 500, justifyContent: 'space-around', alignItems: 'center' }}>
        <Link to={"/white"} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',fontSize: '18pt', color: 'white', width: 150, height: 80, textDecoration: 'none', borderRadius: 20,backgroundColor: '#636363',background: 'linear-gradient(145deg, #6a6a6a, #595959);', boxShadow: '3px 3px 4px #454545, -3px -2px 4px #818181'}}>사라스바티</Link>
        <Link to={"/black"} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18pt', color: 'white', width: 150, height: 80, textDecoration: 'none', borderRadius: 20,backgroundColor: '#636363',background: 'linear-gradient(145deg, #6a6a6a, #595959);',boxShadow: '3px 3px 4px #454545, -3px -3px 4px #818181'}}>크투가</Link>
        <Link to={"/brown"} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',fontSize: '18pt', color: 'white', width: 150, height: 80, textDecoration: 'none', borderRadius: 20,backgroundColor: '#636363',background: 'linear-gradient(145deg, #6a6a6a, #595959);', boxShadow: '3px 3px 4px #454545, -3px -3px 4px #818181'}}>페르세포네</Link>
      </div>
    </div>
  );
}
export default App;
