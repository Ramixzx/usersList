import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/appContext';
import Details from './pages/Details';
import Menu from './pages/Menu';

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/details/:id' element={<Details />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
