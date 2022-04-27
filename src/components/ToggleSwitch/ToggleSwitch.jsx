import React, { useContext } from 'react'
import { Context } from '../../context/appContext';
import './ToggleSwitch.css'

const ToggleSwitch = () => {
  const { mood, setMood } = useContext(Context);

  return (
    <>
      <div className="toggle-button-cover">
        <div className="button-cover">
          <div className="button r" id="button-1">
            <input type="checkbox" className="checkbox" onClick={() => setMood(!mood)} />
            <div className="knobs"></div>
            <div className="layer"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToggleSwitch;