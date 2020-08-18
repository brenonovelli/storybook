import React, { useState } from "react";

import { Radio } from "../src";

export default {
  title: "components/Radio",
  component: Radio,
};

export const Group = () => {
  const options = [
    { id: 1, value: "Alpha" },
    { id: 2, value: "Beta" },
  ];

  const [option, setOption] = useState(options[1].id);

  return (
    <form>
      {options.map((item) => (
        <Radio
          name="radio"
          key={item.id}
          label={item.value}
          value={item.value}
          checked={option === item.id}
          onChange={() => setOption(Number(item.id))}
        />
      ))}
    </form>
  );
};

export const Checked = () => (
  <Radio
    label="Checked"
    value="Checked"
    name="radio"
    defaultChecked={true}
    readOnly
  />
);

export const ReadOnly = () => (
  <Radio
    label="Read Only"
    value="Read Only"
    name="radio"
    checked={false}
    readOnly
  />
);

ReadOnly.storyName = "Read Only";
