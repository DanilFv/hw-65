import './App.css';
import {Container, Typography} from '@mui/material';
import {Navigate, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.tsx';
import Page from './containers/Page/Page.tsx';


const App = () => {


  return (
    <>
        <NavBar />
        <Container>
            <Routes>
                <Route path="/" element={<Navigate to="/pages/home" />} />
                <Route path="/pages/:pageName" element={(<Page />)} />

                 <Route
                     path="*"
                     element={(<Typography component='p' variant='h4' sx={{textAlign: 'center', mt: 3}}>Not found page!</Typography>)}
                 />
            </Routes>
        </Container>

    </>
  )
};

export default App
