import { useContext, useEffect, useState } from "react";
import Navber from "../Components/HomeComponents/Navber";
import { AuthContext } from "../ContextProvider/AuthProvider";
import MybookingCard from "./MybookingCard";
import Swal from "sweetalert2";
const Mybooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/booking?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);
  const handleDelete = (id) => {
    // const procced = confirm("are you sure to delete this item");
    // if (procced) {
    //   fetch(`http://localhost:5000/booking/${id}`, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if (data.deletedCount > 0) {
    //         alert("you data deleted");
    //       }
    //       const remaining = bookings.filter((booking) => booking._id !== id);
    //       setBookings(remaining);
    //     });
    // }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
        });
    });
  };
  return (
    <div>
      <Navber></Navber>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <MybookingCard
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
              ></MybookingCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mybooking;
