import { StyleSheet, Text, View } from "react-native"
import Color from "../shared/Color"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import MoviesListSlider from "../components/MoviesListSlider"

const HomeScreen=()=>{
    const [movie, setMovie] = useState()
    useEffect(()=>{
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            //console.log(`api data = ${data[0].show}`)
            setMovie(data)
        })
        .catch((e)=>{
            console.log(`api error = ${e}`)
        })
    },[])
    return(
        <View style={styles.container}>
            <Header/>
            <MoviesListSlider data={movie} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        marginTop:20,
        backgroundColor:Color.primary
    }
})
export default HomeScreen