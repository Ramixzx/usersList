import React, { useState, useEffect } from 'react';
import { CirclePicker } from 'react-color'
import { v4 as uuidv4 } from 'uuid'

const colors = ['#5E08F7', '#1ADB88', '#F30FC5', '#FE8004', '#E5FA05'];

const users = [
  {
    id: 1,
    name: 'Ramiro',
    backgroundColor: colors[0],
  },
  {
    id: 2,
    name: 'Rocco',
    backgroundColor: colors[1],
  },
  {
    id: 3,
    name: 'Roman',
    backgroundColor: colors[3],
  },
  {
    id: 4,
    name: 'Renata',
    backgroundColor: colors[2],
  },
  {
    id: 5,
    name: 'Claudia',
    backgroundColor: colors[4],
  },
]

const Menu = () => {
  const [textInput, setTextInput] = useState();
  const [colorPicker, setColorPicker] = useState(colors[0]);
  const [cards, setCards] = useState(users);

  const createNewUser = () => {
    setCards([
      ...cards,
      {
        id: uuidv4(),
        name: textInput,
        backgroundColor: colorPicker
      }
    ])
  }

  return (
    <>
      <section className='container-create'>
        <input className='create-input' type="text" placeholder='Nombre' onChange={text => setTextInput(text.target.value)} />
        {console.log(textInput)}
        <div className='create-colorPicker'>
          <CirclePicker
            color={colorPicker}
            colors={colors}
            onChangeComplete={color => setColorPicker(color.hex)}
          />
        </div>
        <button className='create-button' onClick={createNewUser}>Create</button>
      </section>

      <section className='container-cards'>
        {/* <CardItem /> */}
        <div className='card'>
          <img className='card-image' src="" alt="Avatar" />
          <p className='card-p'>Name</p>
          <button className='card-button'>Delete</button>
        </div>
        {/* Prube */}
      </section>
      <ul>
        {
          cards.map(user => (
            <li className='card'
              style={{ backgroundColor: user.backgroundColor }}
              key={uuidv4()}
            >
              <span>{user.id}</span>
              <p className='card-p'>{user.name}</p>
              <button className='card-button'>Delete</button>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default Menu;