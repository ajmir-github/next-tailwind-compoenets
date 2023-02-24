import { useState } from "react";

export function classes(...cls) {
  return cls.filter(Boolean).join(" ");
}

export function useToggle(initialState = false) {
  const [visible, setVisiblity] = useState(initialState);
  const toggle = () => setVisiblity(!visible);
  const handleOpen = () => setVisiblity(true);
  const handleClose = () => setVisiblity(false);
  return {
    visible,
    toggle,
    handleClose,
    handleOpen,
  };
}
