import React from 'react';
import Header from '../components/Header';

const Layout = ({children}) => {
    return (
        <main className="Main">
            <Header />
            {children}
        </main>
    );
}

export default Layout;