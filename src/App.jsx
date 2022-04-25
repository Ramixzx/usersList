import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/appContext';
import Details from './pages/Details';
import Menu from './pages/Menu';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
