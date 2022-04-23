import { v4 as uuidv4 } from 'uuid'
import React, { useState, useEffect, createContext } from 'react';

export const Context = createContext();

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

export const UserProvider = ({ children }) => {

  const [textInput, setTextInput] = useState();
  const [colorPicker, setColorPicker] = useState(colors[0]);
  const [cards, setCards] = useState(users);

  const createNewUser = () => {
    return setCards([
      ...cards,
      {
        id: uuidv4(),
        name: textInput,
        backgroundColor: colorPicker
      }
    ])
  }

  return (
    <Context.Provider value={{ textInput, setTextInput, colorPicker, setColorPicker, cards, setCards, colors, createNewUser }}>
      {children}
    </Context.Provider>
  )
}

