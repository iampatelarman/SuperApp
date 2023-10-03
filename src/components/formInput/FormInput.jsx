import { useState } from "react";

const FormInput = ({
  type,
  name,
  placeholder,
  label,
  value,
  handleChange,
  isChecked,
  pattern,
}) => {
  const [focused, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus(true);
  };

  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder && placeholder}
        value={value}
        required
        checked={isChecked}
        onChange={handleChange}
        pattern={pattern}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <label>{label}</label>
      <span>
        {label ? "Check this box if you want to proceed" : "Field is required"}
      </span>
    </div>
  );
};

export default FormInput;
