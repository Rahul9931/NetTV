import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';

export default function SearchScreen({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const searchMovies = (query) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            //console.log(`api data = ${data[0].show}`)
            setMovies(data)
        })
        .catch((e)=>{
            console.log(`api error = ${e}`)
        })
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details', { movie: item.show })}>
      <Image source={{ uri: item.show.image?.original }} style={styles.thumbnail} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.show.name}</Text>
        <Text style={styles.summary} numberOfLines={3}>{item.show.summary?.replace(/<[^>]*>/g, '')}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={() => searchMovies(search)}
      />
      <FlatList
        numColumns={2}
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.show.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    marginBottom:10,
    borderRadius: 5,
  },
  item: {
    width:Dimensions.get('screen').width*0.45,
    height:Dimensions.get('screen').height*0.35,
    margin: 5,
    backgroundColor: '#333',
    borderRadius: 5,
    alignItems:'center'
  },
  thumbnail: {
    width: Dimensions.get('screen').width*0.40,
        height: Dimensions.get('screen').height*0.20,
        borderRadius: 5,
        marginTop:5
  },
  details: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
  summary: {
    color: '#aaa',
  },
});