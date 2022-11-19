import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthUser";

const BookingModal = ({ treatment, setTreatment, selectedDate,refetch }) => {
  const { name: treatmentName, slots } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);
  // console.log(tritment)
  const handelBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const slot = form.slot.value;
    const Booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      email,
      number,
      slot,
    };
    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("booking confirmed");
          refetch()

        }
        else{
          toast.error(data.message)
        }
      })
      .catch((err) => console.error(err));
    // console.log( Booking);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form
            onSubmit={handelBooking}
            className="grid grid-cols-1 gap-5 mt-10"
          >
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              defaultValue={user.displayName}
              placeholder="Full Name"
              className="input input-bordered w-full "
            />
            <input
              name="number"
              type="text"
              placeholder="Number"
              className="input input-bordered w-full "
            />
            <input
              name="email"
              type="email"
              defaultValue={user.email}
              disabled
              placeholder="Email"
              className="input input-bordered w-full "
            />
            <input
              className="input btn btn-accent input-bordered w-full "
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
