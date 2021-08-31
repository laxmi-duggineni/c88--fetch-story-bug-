import React, { Component } from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, Platform, StatusBar, Dimensions, ScrollView, TextInput } from "react-native";
import DropdownPicker from 'react-native-dropdown-picker';

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";

let customFonts = {
	"Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class CreateStory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fontsLoaded: false,
            previewImage: "image1",
            dropdownHeight: 40
		};
	}

	async _loadFontsAsync() {
		await Font.loadAsync(customFonts);
		this.setState({ fontsLoaded: true });
	}

	componentDidMount() {
		this._loadFontsAsync();
	}

	render() {
		if (!this.state.fontsLoaded) {
			return <AppLoading />
		} else {

            let previewImages = {
                image1: require("../assets/story_image_1.png"),
                image2: require("../assets/story_image_2.png"),
                image3: require("../assets/story_image_3.png"),
                image4: require("../assets/story_image_4.png"),
                image5: require("../assets/story_image_5.png")

            };

            return(
			<View style={styles.container}>
                <SafeAreaView style = {{marginTop: 30}}/>

				<View style={styles.appTitle}>
					<View style={styles.appIcon}>
						<Image
							source={require("../assets/logo.png")}
							style={styles.iconImage}
						></Image>
					</View>
					<View style={styles.appTitleTextContainer}>
						<Text style={styles.appTitleText}>New Story</Text>
					</View>

				</View>

                <View style = {styles.fieldContainer}>

                    <ScrollView>
                        <Image source = {previewImages[this.state.previewImage]}
                        style = {styles.previewImage}
                        />
                        
                        <View style = {{height: RFValue(this.state.dropdownHeight)}}>
                            <DropdownPicker
                            items = {[
                                {
                                    label: "Image 1",
                                    value: "image1"
                                },

                                {
                                    label: "Image 2",
                                    value: "image2"
                                },

                                {
                                    label: "Image 3",
                                    value: "image3"
                                },

                                {
                                    label: "Image 4",
                                    value: "image4"
                                },

                                {
                                    label: "Image 5",
                                    value: "image5"
                                },

                            ]}

                            defaultValue = {this.state.previewImage}

                            containerStyle = {{height: RFValue(40), marginBottom: RFValue(10), borderRadius: RFValue(4)}}

                            onOpen = {()=>{
                                this.setState({
                                    dropdownHeight: RFValue(170)
                                })
                            }}

                            onClose = {()=>{
                                this.setState({
                                    dropdownHeight: RFValue(40)
                                })
                            }}

                            arrowIconStyle = {{
                                color: "white",
                                fontFamily: "Bubblegum-Sans",
                                
                            }}

                            labelStyle = {{
                                color : "white",
                                fontFamily: "Bubblegum-Sans",
                                fontSize: RFValue(12)
                            }}

                            style = {{backgroundColor: "transparent"}}
                            
                            itemStyle={{
                                justifyContent: "flex-start"
                              }}
                              dropDownStyle={{ backgroundColor: "#2f345d" }}

                            dropDownContainerStyle = {{
                                backgroundColor: "#000"
                            }}

                            onChangeItem = {item=>{
                                this.setState({
                                    previewImage: item.value
                                })

                            }}
                            
                            
                            />

                    </View>


                        <TextInput
                            style = {styles.inputBox}

                            placeholder = {"Story Title"}

                            placeholderTextColor = "white"

                            onChangeText = {(title)=>{
                                this.setState({
                                    title
                                })
                            }}

                            
                            />

                        <TextInput
                            style = {styles.inputBox}

                            placeholder = "Description"

                            placeholderTextColor = "white"

                            multiline = {true}

                            numberOfLines = {4}

                            onChangeText = {(description)=>{
                                this.setState({
                                    description
                                })
                            }}

                            
                            />

                        <TextInput
                            style = {styles.inputBox}

                            placeholder = "Story"

                            placeholderTextColor = "white"

                            multiline = {true}

                            numberOfLines = {20}

                            onChangeText = {(story)=>{
                                this.setState({
                                    story
                                })
                            }}

                            
                            />

                        <TextInput
                            style = {styles.inputBox}

                            placeholder = {"Moral of the Story"}

                            placeholderTextColor = "white"

                            multiline = {true}

                            numberOfLines = {4}

                            onChangeText = {(moralOfTheStory)=>{
                                this.setState({
                                    moralOfTheStory
                                })
                            }}



                            
                            />

                    </ScrollView>

                        
                </View>
                            <View style = {{flex: 0.06}}/>

			</View>
            );
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#15193c"
	},
	droidSafeArea: {
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
	},
	appTitle: {
		flex: 0.07,
		flexDirection: "row"
	},
	appIcon: {
		flex: 0.3,
		justifyContent: "center",
		alignItems: "center"
	},
	iconImage: {
		width: "100%",
		height: "100%",
		resizeMode: "contain"
	},
	appTitleTextContainer: {
		flex: 0.7,
		justifyContent: "center"
	},
	appTitleText: {
		color: "white",
		fontSize: RFValue(28),
		fontFamily: "Bubblegum-Sans"
	},

    fieldContainer: {
        flex: 0.85,

    },

    inputBox: {
        paddingLeft: RFValue(20),
        color: "white",
        fontFamily: "Bubblegum-Sans",
        marginBottom: RFValue(10),
        height: RFValue(40),
        borderColor: "white",
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
    },

    previewImage : {
        width: "95%",
        height: RFValue(250),
        alignSelf: "center",
        marginTop: 10, 
        marginBottom: 10,
        resizeMode: "contain"
    }
})