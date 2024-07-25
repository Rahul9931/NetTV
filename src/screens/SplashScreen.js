import { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import Color from "../shared/Color"

const SplashScreen=({navigation})=>{
    useEffect(()=>{
        setTimeout(() => {
            navigation.replace('Main');
        }, 2000);
    },[navigation])
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>NetTV</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: Color.primary
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:40,
        color:'red'
    }
})
export default SplashScreen