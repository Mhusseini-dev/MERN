import './App.css';
import MyNewComponents from './components/MyNewComponents';

function App() {
  return (
    <div className="App">
<MyNewComponents firstName="bruce" lastName="Wayne" Age="45" hair="black"/>
<MyNewComponents firstName="Clark" lastName="Kent" Age="33" hair="black"/>
<MyNewComponents firstName="Peter " lastName="Parker" Age="23" hair="black"/>


    </div>
  );
}

export default App;
