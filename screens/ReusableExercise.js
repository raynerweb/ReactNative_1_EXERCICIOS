import React from 'react';
import { View, Text, StyleSheet, ShadowPropTypesIOS } from 'react-native';
import PropTypes from 'prop-types';

/**
 * 1
 * 
 * Escreva aqui componente que receba duas propriedades (FirstName and LastName)
 * O componente deve apresentar um nome ao lado do outro
 * Mantenha a estrutura do componente abaixo (View com dois Texts)
 */

/**
 * 2
 * Escreve um prototype para esse componente
 * validando se ambas as propriedades sao do tipo string.
 */



const FirstAndLastName = (props) => {
  return (
    <View style={style.row}>
      <Text>{props.firstname}</Text>
      <Text>{props.lastname}</Text>
    </View>
  );
}

FirstAndLastName.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string
};

const ReusableExercise = (props) => {
  return (
    <View style={style.container}>
      <FirstAndLastName firstname="Jose" lastname="Urbano" />
      <FirstAndLastName firstname="Maria" lastname="Duarte" />
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  row: { flexDirection: 'row' },
});

export default ReusableExercise;
