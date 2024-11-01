import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation, useRoute } from "@react-navigation/native";
export default function About({ route }) {
  const { img, name, message } = route.params;
  const navigation = useNavigation();
  const [view, setView] = useState(false);
  //   const {message}=route.params?.message
  return (
    <ScrollView>
      <View style={style.head}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Entypo
          name="dots-three-vertical"
          size={24}
          color="black"
          onPress={() => setView((prev) => !prev)}
        />
        {view && (
          <TouchableOpacity
            style={style.exitContainer}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={style.viewexit}>Exit</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={style.view}>
        <Text style={style.text}>{name}</Text>
        <Image source={img} style={style.img} />
      </View>
      <Text style={style.text}>About Course</Text>
      <Text style={style.para}>
        Python is a general-purpose, high-level programming language. Its design
        philosophy emphasizes code readability with its notable use of
        significant whitespace.{" "}
      </Text>
      <Text style={style.coursecontent}>Course Content</Text>
      <TouchableOpacity
        style={style.play}
        onPress={() =>
          navigation.navigate("content", {
            title: name,
            subtitle: "introduction",
            img: img,
          })
        }
      >
        {message === "introduction" ||
        message === "variables" ||
        message === "Data types" ||
        message == "Numbers" ? (
          <AntDesign name="checkcircle" size={24} color="green" />
        ) : (
          <Text>01</Text>
        )}
        <Text>introduction</Text>
        <AntDesign name="play" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity
        style={style.play}
        onPress={() =>
          navigation.navigate("content", {
            title: name,
            subtitle: "variables",
            img: img,
          })
        }
      >
        {message === "variables" ||
        message === "Data types" ||
        message == "Numbers" ? (
          <AntDesign name="checkcircle" size={24} color="green" />
        ) : (
          <Text>02</Text>
        )}
        <Text>variables</Text>
        <AntDesign name="play" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity
        style={style.play}
        onPress={() =>
          navigation.navigate("content", {
            title: name,
            subtitle: "Data types",
            img: img,
          })
        }
      >
        {message === "Data types" || message == "Numbers" ? (
          <AntDesign name="checkcircle" size={24} color="green" />
        ) : (
          <Text>03</Text>
        )}
        <Text>data types</Text>
        <AntDesign name="play" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity
        style={style.play}
        onPress={() =>
          navigation.navigate("content", {
            title: name,
            subtitle: "Numbers",
            img: img,   
          })
        }
      >
        {message == "Numbers" ? (
          <AntDesign name="checkcircle" size={24} color="green" />
        ) : (
          <Text>04</Text>
        )}
        <Text>numbers</Text>
        <AntDesign name="play" size={24} color="blue" />
      </TouchableOpacity>
      <View style={style.buttonContainer}>
        <Button title="Submit"/>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  head: {
    padding: 20,
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    width: 370,
    height: 300,
    marginTop: 10,
    paddingRight: 40,
    // marginRight:50
  },
  view: {
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    paddingLeft: 5,
  },
  para: {
    padding: 10,
  },
  exitContainer: {
    backgroundColor: "#fff",
    position: "absolute", // Position the exit message absolutely
    right: 10, // Align it to the right
    top: 30, // Position it below the dots icon
    padding: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  viewexit: {
    color: "black",
    fontSize: 25,
  },
  coursecontent: {
    fontSize: 23,
    fontWeight: "bold",
    padding: 5,
  },
  play: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#fff", // optional: adds a background color to make the shadow visible
    borderRadius: 8, // optional: rounds the corners
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    borderRadius: 13,
    marginHorizontal:70,
    borderRadius:10
  },
});
