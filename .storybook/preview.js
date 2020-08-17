import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import centered from "@storybook/addon-centered/react";

import "./reset.css";

addDecorator(withInfo);
addDecorator(centered);

// Import all stories

// configure(require.context("../stories", true, /\.stories\.tsx$/), module);
