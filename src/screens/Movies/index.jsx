import React from "react";
import { ScrollView } from "react-native";

import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import { Banners } from "../../components/Banners";
import { Categorias } from "../../components/Categorias";

import { TitlesList } from "../../components/TitlesList";

import { titles } from "../../utils/titles";

export function Movies() {
  const { animation, newest, recommended, starWars } = titles;
  return (
    <Background>
      <ScrollView>
        <Header />
        <Banners />
        <Categorias />
        <TitlesList title="Recomendado para Você" data={recommended} />
        <TitlesList title="Novidades no Disney+" data={newest} />
        <TitlesList title="Filmes de animação" data={animation} />
        <TitlesList title="Série Star Wars" data={starWars} />
      </ScrollView>
    </Background>
  );
}
