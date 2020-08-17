import React from "react";

import { Button } from "../src";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => <Button>Default</Button>;
export const Outlined = () => <Button outlined>Outlined</Button>;
export const Disabled = () => <Button disabled>Disabled</Button>;
