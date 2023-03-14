import React, { useState, useRef, useEffect } from 'react'

const DURATION = 300;

export default function Collapsible(props) {
  const { active } = props;
  const [timeoutId, setTimeoutId] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const mainRef = useRef(null);
  const innerRef = useRef(null);
  let timeout = null;

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }, []);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    if (active) {
      setMaxHeight(innerRef.current.offsetHeight + 'px');

      let timeout = setTimeout(() => {
        setMaxHeight('none');
        setTimeoutId(null);
      }, DURATION);
      setTimeoutId(timeout);
    }
    else {
      setMaxHeight(mainRef.current.offsetHeight + 'px');

      let timeout = setTimeout(() => {
        setMaxHeight('0px');
        setTimeoutId(null);
      }, 30);
      setTimeoutId(timeout);
    }
  }, [active]);

  return (
    <div className="Collapsible" style={{ maxHeight: maxHeight }} ref={mainRef}>
      <div ref={innerRef}>
        {props.children}
      </div>

      <style jsx>{`
        @import 'styles/components.scss';

        .Collapsible {
          overflow: hidden;
          max-height: 0;
          transition: max-height ${DURATION}ms;
        }
      `}</style>
    </div>
  );
}
