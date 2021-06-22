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

class Carrinho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      itensSelect: []
    };
  }

  componentDidMount(){
    this.loadItens();
  }

  async loadItens(){
    let itensSelectList = await AsyncStorage.getItem('itensSelect');
    itensSelectList = JSON.parse(itensSelectList);
    this.setState({
      itensSelect: itensSelectList
    })

  }

  async removeItemCarrinho(item, index) {
    let newArray = await AsyncStorage.getItem('itensSelect');

    newArray = JSON.parse(newArray);
    newArray.splice(index, 1);
    await AsyncStorage.setItem(
      'itensSelect',
      JSON.stringify(newArray),
    );
    this.setState({
      itensSelect: newArray
    })
  }

  renderItem(item, index){
    console.log(item);
    const backgroundColor = item.id === this.state.selectedId ? "black" : "white";
    const color = item.id === this.state.selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => this.removeItemCarrinho(item, index)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.itensSelect}
          renderItem={({item, index}) => (
            this.renderItem(item, index)
          )}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
    );
  }
};

export default Carrinho;
