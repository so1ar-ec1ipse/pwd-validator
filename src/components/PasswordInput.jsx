import React from "react";

export default function PasswordInput({ label, value, onChange }) {
  return (
    <label>
      {label}:
      <input type="password" value={value} onChange={onChange} />
    </label>
  );
}
