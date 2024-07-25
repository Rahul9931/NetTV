import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Header = ()=>{
    const navigation = useNavigation();
    return(
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>NetTV</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <FontAwesome5 name="search" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    headerStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:10
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:25,
        color:'red'
    }
})

export default Header;