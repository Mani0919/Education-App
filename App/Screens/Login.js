import { View, Text, Image, StyleSheet,TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../Shades/Colors";
export default function Login({navigation}) {
  return (
    <View>
      <Image source={require("./../assests/login.png")} style={styles.image} />
      <View>
        <Text style={styles.text}>Welcome to Education App</Text>
        <TouchableOpacity style={styles.view} onPress={() => navigation.navigate("home")}>
        <Ionicons name="logo-google" size={24} color="#fff" />
        <Text style={styles.text2}>Sign in with Google</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
    marginLeft: 40,
    marginTop: 80,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    padding: 30,
    marginTop:20
  },
  view: {
    display: "flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:7,
    backgroundColor:"blue",
    padding:10,
    margin:30,
    paddingHorizontal:10,
    marginTop:-20,
    borderRadius:10
  },
  text2:{
    color:"#ffff",
    fontSize:15
  }
});
