import React, { useState } from "react";

const Contact = () => {
const[data, setData] = useState({
  fullname: "",
  lastname: "",
  phone: "",
  email: "",
  msg: "",
})


const InputEvent = (event) => {
  const {name, value} = event.target;

  setData((preVal) => {
    return{
      ...preVal,
      [name] : value,
    };
  });
};
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My Name is ${data.fullname}. My Mobile Number is ${data.phone}. My EMail is ${data.email}. Here I explain about my Self ${data.msg}`)
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Type Your First Name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name="lastname" value={data.lastname} onChange={InputEvent} placeholder="Type Your Last Name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile Number" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </>
  );
};

export default Contact;