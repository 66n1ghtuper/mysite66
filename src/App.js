import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { ThemeProvider } from './ThemeContext';
import BottomMenu from './BottomMenu';
import Header from './Header';
import Prodj from './Prodj';
import Sayk from './sayk';
import Sled from './sled';
import './App.css'; 

const Loader = () => {
    return (
        <div className="loader">
            <img src="/99.gif" alt="Loading..." />
        </div>
    );
};

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3500); // Задержка 3.5 секунды

        return () => clearTimeout(timer);
    }, []);

    return (
        <ThemeProvider>
            <Router future={{ v7_relativeSplatPath: true }}>
                <div className="appContainer">
                    {loading ? (
                        <Loader />
                    ) : (
                        <>
                            <Header />
                            <main>
                                <Routes>
                                    <Route path="/sayk" element={<Sayk />} />
                                    <Route path="/prodj" element={<Prodj />} />
                                    <Route path="/sled" element={<Sled />} />
                                    {/* Добавьте Splat маршрут, если необходимо */}
                                    <Route path="/*" element={<Sayk />} /> {/* Замените YourFallbackComponent на ваш компонент */}
                                </Routes>
                            </main>
                            <BottomMenu />
                        </>
                    )}
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
