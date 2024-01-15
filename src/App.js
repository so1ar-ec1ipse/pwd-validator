import React, { useState } from "react";
import PasswordInput from "./components/PasswordInput";
import ErrorMessage from "./components/ErrorMessage";
import {
  hasMinSix,
  hasAtLeastOneLower,
  hasAtLeastOneUpper,
  hasAtLeastOneDigit,
  hasAtLeastOneSpecial,
} from "./utils/validators";

const validators = [
  { validator: hasMinSix, errorMsg: "Password should have a min length of 6 characters" },
  {
    validator: hasAtLeastOneUpper,
    errorMsg: "Password should have at least 1 uppercase character",
  },
  {
    validator: hasAtLeastOneLower,
    errorMsg: "Password should have at least 1 lowercase character",
  },
  { validator: hasAtLeastOneDigit, errorMsg: "Password should have at least 1 number" },
  {
    validator: hasAtLeastOneSpecial,
    errorMsg: `Password should have at least 1 special character (!@#$%^&*()_-+={[}]|:;"'<,>.)' }]`,
  },
];

function App() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPwdValid, setIsPwdValid] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  // Check if passwords match
  const validatePassword = () => {
    if (password !== confirmPassword) {
      setIsPwdValid(false);
      setErrorMessages(["Passwords do not match"]);
      return;
    }

    const messages = [];

    for (const { validator: isValid, errorMsg } of validators) {
      if (!isValid(password)) messages.push(errorMsg);
    }

    if (messages.length) setIsPwdValid(false);
    else setIsPwdValid(true);

    setErrorMessages(messages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validatePassword();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <PasswordInput
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <PasswordInput
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <button type="submit" disabled={!password.length}>
          Submit
        </button>
      </form>

      {isPwdValid ? (
        <div style={{ color: "green" }}>Password is valid!</div>
      ) : (
        errorMessages.map((msg) => <ErrorMessage message={msg} />)
      )}
    </div>
  );
}

export default App;
