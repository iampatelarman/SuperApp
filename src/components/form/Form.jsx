import { useState } from "react";
import FormInput from "../formInput/FormInput";
import "./form.css";
import { setLocalStorage } from "../../localStorage";
import { useNavigate } from "react-router-dom";

const InputData = [
  {
    id: 1,
    type: "text",
    name: "name",
    placeholder: "Name",
    pattern: "[A-Za-z0-9 ]{3,10}",
  },
  {
    id: 2,
    type: "text",
    name: "userName",
    placeholder: "User Name",
    pattern: "[A-Za-z0-9]{3,10}",
  },
  { id: 3, type: "email", name: "email", placeholder: "Email" },
  {
    id: 4,
    type: "text",
    name: "mobile",
    placeholder: "Mobile",
    pattern: "[0-9]{10}",
  },
  {
    id: 5,
    type: "checkbox",
    name: "isChecked",
    label: "Share my registration data with Superapp",
  },
];

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    mobile: "",
    isChecked: false,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      isChecked: checked,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setLocalStorage("formData", formData);

    navigate("/category");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h1>Super app</h1>
          <p>create your new account</p>
        </div>
        <div>
          {InputData.map((input) => {
            const { name } = input;
            return (
              <FormInput
                {...input}
                key={input.id}
                value={formData[name]}
                isChecked={formData.isChecked}
                handleChange={handleChange}
              />
            );
          })}
        </div>
        <button type="submit" className="btn-signup">
          Sign Up
        </button>
        <div className="form-info">
          <p>
            By clicking on Sign up. you agree to Superapp{" "}
            <a href="#terms">Terms and Conditions of Use</a>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" "}
            <a href="#privacy">Privacy Policy</a>
          </p>
        </div>
      </form>
    </>
  );
};

export default Form;
