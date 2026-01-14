import './App.css';
import {Container} from '@mui/material';
import {Route, Routes} from 'react-router-dom';


const App = () => {


  return (
    <>

        <Container>
            <Routes>
                <Route path="/" element={(<App />)} />
            </Routes>
        </Container>

    </>
  )
};

export default App
