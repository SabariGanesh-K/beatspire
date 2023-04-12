import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseProvider } from './BackendConfig/FirebaseConfig';
import { BlockchainProvider } from './BackendConfig/BlockchainConfig';
import { Main } from './Pages/main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <FirebaseProvider>
        <BlockchainProvider>
          <Main/>
        </BlockchainProvider>
      </FirebaseProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
