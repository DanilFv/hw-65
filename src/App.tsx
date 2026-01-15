import './App.css';
import {Container} from '@mui/material';
import {Navigate, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.tsx';


const App = () => {


  return (
    <>
        <NavBar />
        <Container>
            <Routes>
                <Route path="/" element={<Navigate to="/pages/home" />} />
            </Routes>
        </Container>

    </>
  )
};

export default App
