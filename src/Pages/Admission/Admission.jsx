import { useContext, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const universities = [
  "Harvard University",
  "Stanford University",
  "Massachusetts Institute of Technology (MIT)",
  "University of Oxford",
  "Yale University",
  "Cambridge University"
];

const Admission = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const {createUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();


  const onSubmit = data => {
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(() =>{
        const saveInfo = {name: data.name, email:data.email, subject:data.subject, phone:data.phone, address:data.address, date:data.date}
        console.log(saveInfo)
        fetch('http://localhost:5000/userInfo', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveInfo)
          
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId) {
            reset();
            Swal.fire({
              position: 'top-middle',
              icon: 'success',
              title: 'User created successfully',
              showConfirmButton:false,
              timer: 2000
            })

          }
        })
        navigate('/')
      })
      .catch(error =>console.log(error))
    })
};

  const handleModalOpen = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log('Selected date:', date);
  };


  return (
    <div className="grid grid-cols-3">
      {universities.map((university, index) => (
        <div key={index} className="container mx-auto py-20">
          <button
            onClick={() => handleModalOpen(university)}
            className={`px-6 py-3 text-base font-medium text-white rounded-full bg-primary`}
          >
            {university}
          </button>
        </div>
      ))}
          <form onSubmit={handleSubmit(onSubmit)} className="form-control">
      {modalOpen && (
        <div
          className={`fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5`}
        >
          <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
            <div className="w-full px-4">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <input className="input input-bordered" {...register("name", { required: true })}
                    type="text"
                    name="name"
                    placeholder="Candidate Name"
                  />
                  {errors.name && <span className="text-red-600">Name is required</span>}
                  <input className="input input-bordered" {...register("subject", { required: true })}
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                  <input className="input input-bordered" {...register("email", { required: true })}
                    type="text"
                    name="email"
                    placeholder="Candidate Email"
                  />
                  <input className="input input-bordered" {...register("phone", { required: false })}
                    placeholder="Candidate Phone Number"
                    name="phone"
                    defaultValue=""
                  />
                  <input className="input input-bordered" {...register("address", { required: false })}
                    type="text"
                    name="address"
                    placeholder="Address"
                  />
                  <label {...register("date", { required: false })} htmlFor="datepicker">Select a date:</label>
                  <DatePicker
                    id="datepicker"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Date of Birth"
                  />
                  <input type="file" {...register("photoURL", { required: true })} className="file-input file-input-bordered w-full" placeholder="Upload Image" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-3">
              <div className="w-1/2 px-3">
                <button
                  onClick={handleModalClose}
                  className="block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  Cancel
                </button>
              </div>
              <div className="w-1/2 px-3">
                <button type="submit"
                  className={`block w-full p-3 text-base font-medium text-center text-white transition border rounded-lg border-primary bg-primary hover:bg-opacity-90`}
                >
                 Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </form>
    </div>
  );
};

export default Admission;

