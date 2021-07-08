import React from "react";

import { View, Text, Image } from "react-native";

import { Background } from "../../components/Background";
import { Button } from "../../components/Button";

import { styles } from "./styles";

export function Landing() {
  return (
    <Background>
      <Image
        style={styles.image}
        source={require("../../asssets/disneyplus.jpg")}
      />
      <View style={styles.footer}>
        <Button message="ASSINE AGORA" />
        {/* <Text style={styles.pricing}>
          Comece a assistir o Disney+ por R$ 27,90/mês ou R$ 279,90/ano. Os
          preços podem variar em outras moedas ou plataformas.
        </Text> */}
        <Button message="ENTRAR" transparent />
      </View>
    </Background>
  );
}
