import './App.css';
import MyNewComponents from './components/MyNewComponents';

function App() {
  return (
    <div className="App">
<MyNewComponents firstName="bruce" lastName="Wayne" age={10} haircolor="black"/>
<MyNewComponents firstName="Clark" lastName="Kent" age={1} haircolor="black"/>
<MyNewComponents firstName="Peter" lastName="Parker" age={1} haircolor="black"/>
    </div>
  );
}

export default App;
