import React, { useState } from "react";

import { CheckBox } from "../src";

export default {
  title: "components/CheckBox",
  component: CheckBox,
};

export const Default = () => (
  <CheckBox
    name="checkbox"
    label="Checked"
    value="Checked"
    defaultChecked={true}
    readOnly
  />
);

export const Group = () => {
  const allOptions = [
    { id: 1, value: "React" },
    { id: 2, value: "Typescript" },
    { id: 3, value: "Storybook" },
  ];

  const [options, setOptions] = useState([allOptions[1].id]);

  const toggleOption = (id: number) => {
    setOptions(
      options.includes(id)
        ? options.filter((option) => option !== id)
        : [...options, id]
    );
  };

  return (
    <form>
      {allOptions.map((item) => (
        <CheckBox
          name="checkbox"
          key={item.id}
          label={item.value}
          value={item.value}
          checked={options.includes(item.id)}
          onChange={() => toggleOption(item.id)}
        />
      ))}
    </form>
  );
};

export const ReadOnly = () => (
  <CheckBox
    name="checkbox"
    label="Unchecked"
    value="Unchecked"
    checked={false}
    readOnly
  />
);
