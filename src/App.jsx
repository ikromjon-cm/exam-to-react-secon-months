import Logo from '../public/LOGO.png'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import Header from './components/Header/Header';
import { SlBasket } from "react-icons/sl";
import { FaShuffle } from "react-icons/fa6";
import React from 'react';
const headerData =[
  {
    img:Logo,
    title:'BESTXTORE'
  },
  {
    input:{
      title:'search',
      subtitle:'All categories',
      icon:<CiSearch />
    }
  },
  {
    icons:[<CiHeart />,<FaShuffle />,<SlBasket />,<CiUser />]
  }
]
const App = () => {
  return (
    <div>
      
    </div>
  );
}

export default App;
