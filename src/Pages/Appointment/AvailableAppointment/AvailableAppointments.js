import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {  useState } from 'react';
import Loading from '../../Shared/Loding/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
// const [appointmentOption,setAppointmentOption]=useState([])
const [treatment,setTreatment]=useState(null)
const date = format(selectedDate,'PP')
const {data:appointmentOption=[],refetch,isLoading}=useQuery({
     queryKey:['appointmentOption',date],
     queryFn:()=>  fetch(`https://y-five-tau.vercel.app/appointmentOptions?date=${date}`)
     .then(res=>res.json())
})
if(isLoading){
    return <Loading></Loading>
}

// useEffect(()=>{
//     fetch(`https://y-five-tau.vercel.app/appointmentOptions`)
//     .then(res=>res.json())
//     .then(data=>setAppointmentOption(data))
// },[])
// console.log(appointmentOption)
    return (
        <section className='my-16'>
            <p className='text-secondary text-center font-bold text-xl'>available appointment data : {format(selectedDate,'PP')}</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                {
                    appointmentOption.map(appointment=><AppointmentOption
                    
                    key={appointment._id}
                    appointment={appointment}
                    setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
           { 
           treatment &&
           <BookingModal
           setTreatment={setTreatment}
           selectedDate={selectedDate}
            treatment={treatment}
            refetch={refetch}
           
            ></BookingModal>

            }
        </section >
    );
};

export default AvailableAppointments;