import React from "react";
import { ScrollView } from "react-native";

import {Header} from '../../components/Header';
import { Background } from '../../components/Background';
import { Banners } from '../../components/Banners';
import { Categorias } from '../../components/Categorias';
import { Recomendados } from '../../components/Recomendados';
import { Novidades } from '../../components/Novidades';
import { Animacao } from '../../components/Animacao';
import { StarWars } from '../../components/StarWars';

export function Movies() {
  return (
    
    <Background>
      <ScrollView>
        <Header/>
        <Banners />
        <Categorias />
        <Recomendados />
        <Novidades />
        <Animacao />
        <StarWars />
      </ScrollView>  
    </Background>
    
  );
}
