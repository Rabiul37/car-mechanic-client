import { useLoaderData } from "react-router-dom";
import Navber from "../Components/HomeComponents/Navber";

const Booking = () => {
  const booking = useLoaderData();
  console.log(booking);
  const { _id, price, title, img } = booking;
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const price = form.price.value;
    const BookingList = {
      name,
      email,
      date,
      title,
      price,
      service: _id,
      img,
    };
    console.log(BookingList);
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(BookingList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("your products successfully booked");
        }
      });
  };
  return (
    <div>
      <Navber></Navber>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className=" lg:flex items-center gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your E-mail"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className=" lg:flex items-center gap-16">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Amount</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    defaultValue={price}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FF3811] text-white">
                  Booked Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
