import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
  const refContainer = useRef(null);

  if (!refContainer.current) {
    refContainer.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(refContainer.current);

    return () => modalRoot.removeChild(refContainer.current);
  }, []);

  return createPortal(<div>{children}</div>, refContainer.current);
}

export default Modal;
