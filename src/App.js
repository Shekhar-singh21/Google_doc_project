
import './App.css';
import Header from './components/organism/header/header';
import InputSection from './components/organism/inputSection/inputSection';
import { Provider } from 'react-redux';
import store from './components/store/store';

function App() {
  return (
    <div className="App">
    <Provider store={store}>

    <Header/>
    <InputSection/>

    </Provider>
    
    
    </div>
  );
}

export default App;
