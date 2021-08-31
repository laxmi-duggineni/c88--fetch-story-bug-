import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import *as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import {FlatList} from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';
import StoryCard from './StoryCard'


let customFont = {
    'Bubblegum-Sans': require ("../assets/fonts/BubblegumSans-Regular.ttf")
}

let stories = require("../screens/temp.json")

export default class Feed extends React.Component {
    constructor(){
        super();
        this.state = {
            fontsLoaded: false
        }
    }

    async _loadFontsAsync(){
        await Font.loadAsync(customFont)
        this.setState({
            fontsLoaded: true
        })

    } 

    componentDidMount(){
        this._loadFontsAsync();
    }

    renderItem =({item:story})=>{
        return <StoryCard 
        story = {story}
        navigation = {this.props.navigation}
        
        />

    }

    keyExtractor =(item,index)=>{
        index.toString();


    }

    render(){
        if (!this.state.fontsLoaded){
            return <AppLoading />
        

        }

        else {
            return(
                <View style = {styles.container}>
                    <View style = {styles.appTitle}>
                        <Text>
                            Storytelling App
                        </Text>

                        <Image source = {require("../assets/logo.png")}/>
                    </View>

                    <View style = {styles.cardContainer}>
                        <FlatList 
                        data = {stories}
                        keyExtractor = {this.keyExtractor}
                        renderItem = {this.renderItem}

                        
                        />

                    </View>



                    
                </View>
            );

        }


    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#15193C"
    },

    appTitle : {
        flex: 0.1,
        flexDirection: 'row'
    },

    cardContainer : {
        flex: 0.9,

    }


})