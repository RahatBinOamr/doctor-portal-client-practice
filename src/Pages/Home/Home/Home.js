import React from 'react';
import Banner from '../Banner/Banner';
import Comments from '../Commetnt/Comments';
import ContactUsFrom from '../ContactUs/ContactUsFrom';
import InfoCards from './InfoCard/InfoCards';
import MakeAppoinment from './MakeAppoinment/MakeAppoinment';
import MenualCard from './MenualCard/MenualCard';
import Services from './Services/ServicesCard/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner/>
            <InfoCards/>
            <Services/>
            <MenualCard/>
            <MakeAppoinment></MakeAppoinment>
            <Comments></Comments>
            <ContactUsFrom></ContactUsFrom>
        </div>
    );
};

export default Home;