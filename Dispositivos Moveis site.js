import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  SafeAreaView,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxht1JEKRxJTPACc--lQ5bLD0-XW_QuW_5nhu9uD0uUq53qlXOhhMb_yy_fvOb-vPl-s&usqp=CAU",
};
const App = () => {
  const [produtos, setProdutos] = useState([
    {
      nome: "Legumes",
      key: 1,
      descriçao:
        "são os vegetais em que o que se come não são as folhas (exemplos: couve-flor, brócolis ou tomates). Costuma-se chamar de verduras os vegetais cuja parte comestível é folhosa (exemplos: alface, agrião e rúcula). Variedades de legumes e verduras: - Bagas: beringeja, pimentão e tomate.",
    },
    {
      nome: "Frutas",
      key: 2,
      descriçao:
        "As frutas são alimentos benéficos à nossa saúde, devendo ser incorporadas à nossa alimentação. Destacam-se por serem ricas em vitaminas, sais minerais e fibras. As frutas podem ser consumidas in natura ou fazer parte da composição de doces, geleias, bolos, entre outros produtos. ",
    },
    {
      nome: "Doceria",
      key: 3,
      descriçao:
        "Doces, lanches e cafés em geral.",
    },
    {
      nome: "Padaria",
      key: 4,
      descriçao:
        "Pães e seus derivados, massas e relacionados a forneria.",
    },
    {
      nome: "Açougue",
      key: 5,
      descriçao:
        "Variedades de carnes; Frango, Porco, Bovina e Vegana.",
    },
    {
      nome: "Bebidas",
      key: 6,
      descriçao:
        " Distribuímos as melhores e mais procuradas bebidas, consumidas e produzidas em cada canto do mundo. Uma loja única onde se encontra a maior variedade em Whisky, Vodka, Gin, Tequila, Licor, Rum, Steinhager, Vinho, Espumante, Champagne, Aperitivo e Cachaça.",
    },
    {
      nome: "Frios",
      key: 7,
      descriçao:
        "Congelados em geral, sorvetes, hamburgueres, carnes especiais, entre outros.",
    },
    {
      nome: "Laticínios",
      key: 8,
      descriçao:
        "Queijos, requeijão, yogurtes, manteigas e derivados.",
    },
    {
      nome: "Limpeza",
      key: 9,
      descriçao:
        "água sanitaria, desinfetante, alvejante, cloro, amaciante, sabão em pó e derivados.",
    },
    {
      nome: "Higiêne Pessoal",
      key: 10,
      descriçao:
        "Sabonetes, desodorantes, shampoo, barbeador, papel higiênico, creme de barbear e derivados.",
    },
  ]);

  const apertarBotao = (item) => {
    console.log(item.descriçao);
    Alert.alert(item.nome, item.descriçao);
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.image}>
          <Text style={styles.title}> Guile Market </Text>
          <FlatList
            numColumns={2}
            keyExtractor={(item) => item.nome}
            data={produtos}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => apertarBotao(item)}>
                <Text style={styles.item}>{item.nome}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#6495ed",
    marginTop: 40,
    marginLeft: 15,
    alignContent: "center",
    textAlign: "center",
    width: 172,
    height: 120,
    padding: 20,
    borderRadius: 25,
    borderColor: "black",
    borderWidth: 2,
  },
  image: {
    flex: 1,
    width: 400,
    height: 800,
    resizeMode: "cover",
    marginTop: 47.5,
  },

  title: {
    marginTop: 2,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
    color: "#6495ed",
    marginBottom: 40,
    textShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: { width: 4, height: 3 },
  },
});
export default App;
