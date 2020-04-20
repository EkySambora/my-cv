import React from 'react';
import SubHeader from '../../Components/Container/SubHeader/SubHeader';
import Footer from '../../Components/Container/Footer/Footer';
import SubFooter from '../../Components/Container/SubFooter/SubFooter';
import Home from '../../Components/Container/Home/Home';
import Navbar from '../../Components/Container/Navbar/Navbar';

const Index = () => {
    return (
        <div>
            <SubHeader />
            <Navbar />
            <Home />
            <Footer/>
            <SubFooter />
        </div>
    )
};

export default Index;