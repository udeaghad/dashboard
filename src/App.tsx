import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header/Header';
import Main from './pages/Main/Main';


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} /> 
      </Routes>    
    </div>
  );
}

export default App;
