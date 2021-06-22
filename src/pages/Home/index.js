import React, {Component} from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, AsyncStorage } from "react-native";

const DataJson = require('../../assets/json/dados.json');

import {
  styles,
} from './styles';

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

class Home extends Component {

  async addItemCarrinho(item) {
    let newArray = await AsyncStorage.getItem('itensSelect');

    if(newArray){
      newArray = JSON.parse(newArray);
    } else {
      newArray = [];
    }
    newArray.push(item)
    await AsyncStorage.setItem(
      'itensSelect',
      JSON.stringify(newArray),
    );
    this.props.navigation.navigate('Carrinho');
  }

  renderItem(item){
    return (
      <Item
        item={item}
        onPress={() => this.addItemCarrinho(item)}
      />
    );
  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DataJson.DATA}
          renderItem={({item}) => (
            this.renderItem(item)
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
};

export default Home;
