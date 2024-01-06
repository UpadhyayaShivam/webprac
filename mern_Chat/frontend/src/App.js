import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatsPage from './Pages/ChatsPage';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
                  <Route  exact path='/' Component={HomePage}/>
                  <Route path='/chats' Component={ChatsPage}/>
          </Routes>
      </Router>

    </div>
  );
}

export default App;
