import React, { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideAlerter(
  ref: React.RefObject<HTMLElement> | null,
  eventHandler: () => void
) {
  useEffect(() => {
    /**
     * Callback with run if clicked event occurs outside of element
     */
    function handleClickOutside(event: MouseEvent | TouchEvent): void {
      if (!ref) return;

      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        // envoke callback
        eventHandler();
      }
    }
    // Bind the event listener
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [ref]);
}

/* Example Implementation for custom useOutsideAlerter hook
function SomeComponent(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return <div ref={wrapperRef}>{props.children}</div>;
 } 
*/
