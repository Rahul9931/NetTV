import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Header = ()=>{
    const navigation = useNavigation()
    return(
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>NetTV</Text>
            <TouchableOpacity onPress={navigation.navigate('Search')}>
                <AntDesign name="search1" size={24} color="white" style={{marginTop:5}}/>
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