import React from 'react';
import { View, Text, StyleSheet, ShadowPropTypesIOS } from 'react-native';

/**
 * Escreva aqui componente que receba duas propriedades (FirstName and LastName)
 * O componente deve apresentar um nome ao lado do outro
 * Mantenha a estrutura do componente abaixo (View com dois Texts)
 */

const FirstAndLastName = (props) => {
  return (
    <View style={style.row}>
      <Text>{props.firstname}</Text>
      <Text>{props.lastname}</Text>
    </View>
  );
}

const ReusableExercise = (props) => {
  return (
    <View style={style.container}>
      <FirstAndLastName firstname="José" lastname="Urbano" />
      <FirstAndLastName firstname="Maria" lastname="Duarte" />
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  row: { flexDirection: 'row' },
});

export default ReusableExercise;
