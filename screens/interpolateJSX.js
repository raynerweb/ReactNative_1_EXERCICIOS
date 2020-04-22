import React from 'react';
import {View, Text, StyleSheet, ShadowPropTypesIOS} from 'react-native';

// Reescreva a componente abaixo alterando XXXX pelo nome e X pelo número de letras no nome.

const Texto = (props) => (
  <View style={style.row}>
    <Text>O nome completo é {props.firstname} {props.lastname} e tem {(props.firstname+props.lastname).length} letras</Text>
  </View>
);

const interpolateJSX = () => {
  return (
    <View>
      <Texto firstname="R" lastname="C" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  row: {flexDirection: 'row'},
});

export default interpolateJSX;
