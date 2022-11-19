import React from 'react';
import fluoride from '../../../../../assets/images/fluoride.png'
import cavity from '../../../../../assets/images/cavity.png'
import whitening from '../../../../../assets/images/whitening.png'
import ServiceCard from '../ServiceCard/Service';
const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ]
    return (
        <div className='mt-9'>
            <div className='text-center'>
                <h3 className='text-lg text-primary uppercase font-bold'>Our services</h3>
                <h2 className='text-3xl'>services we provide</h2>
            </div>
            <div className='grid mt-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    servicesData.map(service=><ServiceCard
                    key={service.id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;