import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById('modal');

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
    // this is saying if elRef hasn't been initialized, we want it to be initialized with this div
    // and we want it to survive past renders, until we dispose the modal
    // but until then, I only want 1 div
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, [])
  // this is saying, whenever it gets created, insert it into the DOM
  // and whenever you're done, remove it from the DOM
  // this prevents memory leaks

  return createPortal(<div>{children}</div>, elRef.current)
}

// Ref is a container for state that you want to survive past render cycles

export default Modal;
