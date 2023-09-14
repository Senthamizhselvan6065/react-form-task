import React from "react";
import { useFormik } from "formik";
import { AppSate } from "../Context/AppProvaider";
import { useNavigate, useParams } from "react-router-dom";
import { BsSubtract } from "react-icons/bs";
import { HiSaveAs } from "react-icons/hi";
import * as yup from "yup";

const userSchema = yup.object({
  id: yup.string().required("Please Enter Your Id *"),
  name: yup.string().required("Please Enter Your Name *"),
  age: yup.string().required("Please Enter Your Age *"),
  role: yup.string().required("Please Enter Your Role *"),
  experience: yup.string().required("Please Enter Your Experience *"),
  email: yup.string().email().required("Please Enter Your Proper Email *"),
  mobile: yup.string().required("Please Enter Your Proper Mobile Number *"),
  address: yup.string().required("Please Enter Your Proper Address *"),
});
const EditUser = () => {
  const { user, setUser } = AppSate();
  const navigate = useNavigate();

  const { id } = useParams();

  const selecttedUser = user.find((per) => per.id === id);

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      id: selecttedUser.id,
      name: selecttedUser.name,
      email: selecttedUser.email,
      experience: selecttedUser.experience,
      role: selecttedUser.role,
      age: selecttedUser.age,
      address: selecttedUser.address,
      mobile: selecttedUser.mobile,
    },
    validationSchema: userSchema,
    onSubmit: (editUser) => {
      console.log("onsubmit");

      updateUser(editUser);
    },
  });

  const updateUser = async (editUser) => {
    try {
      const responce = await fetch(
        `https://6422c86677e7062b3e22836f.mockapi.io/users/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(editUser),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await responce.json();
      console.log("UPDATE or PUT DATA", data);

      const editIndex = user.findIndex((per, idx) => per.id === id);
      user[editIndex] = editUser;
      setUser([...user]);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="create-user">
      <h1>Create a User Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-flex-1">
          <input
            type="text"
            placeholder="Id"
            name="id"
            value={values.id}
            onChange={handleChange}
          />
          {touched.id && errors.id ? (
            <p className="error-input">{errors.id}</p>
          ) : (
            ""
          )}
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {touched.name && errors.name ? (
            <p className="error-input">{errors.name}</p>
          ) : (
            ""
          )}
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={values.age}
            onChange={handleChange}
          />
          {touched.age && errors.age ? (
            <p className="error-input">{errors.age}</p>
          ) : (
            ""
          )}
          <input
            type="text"
            placeholder="Role"
            name="role"
            value={values.role}
            onChange={handleChange}
          />
          {touched.role && errors.role ? (
            <p className="error-input">{errors.role}</p>
          ) : (
            ""
          )}
          <button type="submit" className="create-user-btn">
            <span>
              <HiSaveAs />
            </span>
            Submit
          </button>
        </div>

        <div className="input-flex-2">
          <input
            type="text"
            placeholder="Experience"
            name="experience"
            value={values.experience}
            onChange={handleChange}
          />
          {touched.experience && errors.experience ? (
            <p className="error-input">{errors.experience}</p>
          ) : (
            ""
          )}
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {touched.email && errors.email ? (
            <p className="error-input">{errors.email}</p>
          ) : (
            ""
          )}
          <input
            type="text"
            placeholder="Mobile Number"
            name="mobile"
            value={values.mobile}
            onChange={handleChange}
          />
          {touched.mobile && errors.mobile ? (
            <p className="error-input">{errors.mobile}</p>
          ) : (
            ""
          )}
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
          {touched.address && errors.address ? (
            <p className="error-input">{errors.address}</p>
          ) : (
            ""
          )}
          <button className="create-user-back" onClick={() => navigate("/")}>
            <span>
              <BsSubtract />
            </span>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
