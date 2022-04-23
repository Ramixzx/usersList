import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './pages/Menu'
import Details from './pages/Details'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
