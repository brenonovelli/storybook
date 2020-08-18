import React, { useState } from "react";

import { MdSearch } from "react-icons/md";

import { Input } from "../src";

export default {
  title: "components/Input",
  component: Input,
};

export const Default = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Input
      name="benove"
      placeholder="Digite algo..."
      value={inputValue}
      setValue={setInputValue}
    />
  );
};

export const WithIcon = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Input
      name="benove"
      icon={<MdSearch />}
      placeholder="Pesquise algo..."
      value={inputValue}
      setValue={setInputValue}
    />
  );
};

WithIcon.storyName = "With icon";
