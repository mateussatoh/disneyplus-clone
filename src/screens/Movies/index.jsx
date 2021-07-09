import React from "react";



import { View } from "react-native";

import { styles } from "./styles";

import {Header} from '../../components/Header';

import { MovieCard } from "../../components/MovieCard";

import { Background } from '../../components/Background'



export function Movies() {
  return (
    <Background>
      <Header/>
      <MovieCard />
    </Background>
  );
}
