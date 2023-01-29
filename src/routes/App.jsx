import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import { AppContextProvider } from '../context/AppContextProvider';
import Home from '../pages/Home';
const App = () => {
    return (
        <AppContextProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Home />}/>
                        <Route exact path='/destination' element={""}/>
                        <Route exact path='/crew' element={""}/>
                        <Route exact path='/technology' element={""}/>
                        <Route path='*' element={""}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContextProvider>
    );
}

export default App;