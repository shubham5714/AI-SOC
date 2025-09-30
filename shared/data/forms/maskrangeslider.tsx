import React, { Fragment, useState } from 'react';
import { Range, getTrackBackground } from 'react-range'; // Make sure to import getTrackBackground
// import './Maskrangeslider.css'; 

interface DataType {
  rtl: boolean;
}

const Maskrangeslider = () => {
  const STEP = 10;
  const MIN = 0;
  const MAX = 100;

  const [values, setValues] = useState([50]);
  const [rtl, setRtl] = useState(false); // Adding rtl state for dynamic direction control

  return (
    <Fragment>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          rtl={rtl}
          onChange={(newValues) => setValues(newValues)}
          renderMark={({ props, index }) => (
            <div
              {...props}
              key={`mark-${index}`}
              style={{
                ...props.style,
                height: '16px',
                width: '5px',
                backgroundColor: index * STEP < values[0] ? 'var(--primary-color)' : 'var(--black-1)',
              }}
            />
          )}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: '36px',
                display: 'flex',
                width: '100%',
              }}
            >
              <div
                className="rangeslider-thumb"
                ref={props.ref}
                style={{
                  height: '5px',
                  width: '100%',
                  borderRadius: '4px',
                  background: getTrackBackground({
                    values,
                    colors: ['#5c67f7', 'var(--black-1)'],
                    min: MIN,
                    max: MAX,
                    rtl,
                  }),
                  alignSelf: 'center',
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              key="thumb"
              style={{
                ...props.style,
                height: '35px',
                width: '35px',
                borderRadius: '4px',
                backgroundColor: 'var(--custom-white)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 6px #aba7bb',
              }}
            >
              <div
                style={{
                  height: '16px',
                  width: '5px',
                  backgroundColor: isDragged ? '#5c67f7' : '#aba7bb',
                }}
              />
            </div>
          )}
        />
      </div>
    </Fragment>
  );
};

export default Maskrangeslider;
