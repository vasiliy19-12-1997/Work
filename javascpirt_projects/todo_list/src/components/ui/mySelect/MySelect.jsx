import React from "react";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <div>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <options disabled>{defaultValue}</options>
        {options.map((op) => (
          <option value={op.value} key={op.name}>
            {op.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
