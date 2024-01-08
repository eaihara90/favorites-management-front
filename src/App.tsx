import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import { MainRoutes } from './MainRoutes';

function App() {
  

  return (
    <BrowserRouter>
      <h1>Management Front</h1>
      
      <div className="main-wrapper">
        <MainRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
