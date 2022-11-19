import React from 'react';
import person1 from '../.../../../../assets/images/people1.png'
import people2 from '../.../../../../assets/images/people2.png'
import people3 from '../.../../../../assets/images/people3.png'
import Comment from './Comment';
import quote from '../../../assets/icons/quote.svg'

const Comments = () => {
    const commetns = [
        {
            id: 1,
            name: 'Bolet',
            description:'Dental care or dentalcare is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders. ',
            something: 'something',
            img: person1
        },
        {
            id: 2,
            name: 'Herry',
            description:'Dental care or dentalcare is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders. ',
            something: 'something',
            img: people2
        },
        {
            id: 3,
            name: 'Marry ',
            description:'Dental care or dentalcare is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders. ',
            something: 'something',
            img: people3
        },
    ]
    return (
        <section className='my-16'>
            <div className="flex justify-between">
            <div >
               <h3 className="text-primary font-3xl font-bold"> Testimonial </h3>
               <p className="text-xl">What patients says</p>
            </div>
            <figure>
                <img className=" w-24 lg:w-48" src={quote} alt="" />
            </figure>
      </div>
      <div className='grid mt-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                commetns.map(comment=><Comment
                key={comment.id}
                comment={comment}
                ></Comment>)
            }
        </div>
        </section>
       
    );
};

export default Comments;