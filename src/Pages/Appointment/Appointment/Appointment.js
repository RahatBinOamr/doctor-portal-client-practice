import React, { useState } from 'react';
import AvailableAppointments from '../AvailableAppointment/AvailableAppointments';
import AppointmentBanner from './AppontmentBanner';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointments
            selectedDate={selectedDate}
            ></AvailableAppointments>
        </div>
    );
};

export default Appointment;