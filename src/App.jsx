import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from './admin/MainTemplate';
import HomePageForm from './components/HomePageForm';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import Content from './components/Content';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainTemplate />}>
                    <Route path="/homepage" element={<HomePageForm />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/landing" element={<LandingPage />} />
                    <Route path="/content" element={<Content />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App;
