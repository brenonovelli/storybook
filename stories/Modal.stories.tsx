import React, { useState } from "react";

import { Modal, Button } from "../src";

export default {
  title: "components/Modal",
  component: Modal,
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>

      <Modal title="Modal Title" open={open} setOpen={setOpen}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolore
        dicta libero esse impedit optio blanditiis dolorum amet voluptatum quam!
      </Modal>
    </>
  );
};
