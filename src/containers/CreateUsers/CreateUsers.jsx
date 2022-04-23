import React from 'react';
import { useContext } from 'react';
import { CirclePicker } from 'react-color';
import { Context } from '../../context/appContext';
import './CreateUsers.css';

const CreateUsers = () => {

  const { setTextInput, colorPicker, setColorPicker, colors, createNewUser } = useContext(Context)

  return (
    <>
      <section className='container-create'>
        <input className='create-input' type="text" placeholder='Nombre' onChange={text => setTextInput(text.target.value)} />
        <div>
          <div className='create-colorPicker'>
            <CirclePicker
              color={colorPicker}
              colors={colors}
              onChangeComplete={color => setColorPicker(color.hex)}
            />
          </div>
          <button className='create-button' onClick={createNewUser}>Create</button>
        </div>
      </section>
    </>
  );
}

export default CreateUsers;