import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {SafeAreaView, View, FlatList, StyleSheet, 
  StatusBar} from 'react-native';

const width = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
