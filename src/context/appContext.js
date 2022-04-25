import { v4 as uuidv4 } from 'uuid'
import React, { useState, useEffect, createContext } from 'react';
import defaultAvatar from '../Assets/images/avatarDefault.png'

export const Context = createContext();

const API_URL = 'https://rickandmortyapi.com/api/character';
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
  const [api, setApi] = useState();
  const [textInput, setTextInput] = useState();
  const [colorPicker, setColorPicker] = useState(colors[0]);
  const [cards, setCards] = useState(users);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const arrayCharacters = data.results;
        setApi(arrayCharacters);
      } catch (error) {
        console.error(error)
      }
    }
    fetchApi();
  }, [])

  const createNewUser = () => {
    // Para usar lista hardcodeada: 
    // return setCards([
    //   ...cards,
    //   {
    //     id: uuidv4(),
    //     name: textInput,
    //     backgroundColor: colorPicker
    //   }
    // ])
    {/* --------------------------------------------------------------------------------------------------------------------> */ }
    // Para usar lista de la API: 
    return setApi([
      ...api,
      {
        id: uuidv4(),
        name: textInput,
        backgroundColor: colorPicker,
        image: defaultAvatar,
      }
    ])

  }

  const deleteUser = (id) => {
    // Para usar lista hardcodeada: 
    // let filterCards = cards.filter(card => card.id !== id)
    // setCards(filterCards)
    {/* --------------------------------------------------------------------------------------------------------------------> */ }
    // // Para usar lista de la API: 
    let filterCharacters = api.filter(character => character.id !== id)
    setApi(filterCharacters)
  }

  return (
    <Context.Provider value={{ textInput, setTextInput, colorPicker, setColorPicker, cards, setCards, colors, createNewUser, deleteUser, api, userInfo, setUserInfo }}>
      {children}
    </Context.Provider>
  )
}

