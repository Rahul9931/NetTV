import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const MoviesListSlider = ({data})=>{
  const navigation = useNavigation();
    return(
        <View style={styles.headerStyle}>
            <FlatList
                numColumns={2}
                data={data}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details', { movie: item.show })}>
                    <Image source={{ uri: item.show.image?.original }} style={styles.thumbnail} />
                    <View style={styles.details}>
                      <Text style={styles.title} >{item.show.name}</Text>
                      <Text style={styles.summary} numberOfLines={3}>{item.show.summary?.replace(/<[^>]*>/g, '')}</Text>
                    </View>
                  </TouchableOpacity>
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    headerStyle:{
        flex:1
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:25,
        color:'red'
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
})

export default MoviesListSlider;