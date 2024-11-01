import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import image6 from "./../assests/image6.png"; 
import image7 from "./../assests/image7.png"; 
import image9 from "./../assests/image9.png"; 
export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.view}>
      <View style={styles.head}>
        <View>
          <Text>Hello</Text>
          <Text style={{ fontWeight: "bold" }}>Manikanta</Text>
        </View>
        <Image
          source={require("./../assests/profile.png")}
          style={styles.img}
        />
      </View>
      <View style={styles.searchbar}>
        <EvilIcons name="search" size={30} color="black" />
        <TextInput placeholder="Search" />
      </View>
      <ScrollView
        horizontal={true}
        style={styles.scrol}
        // showsHorizontalScrollIndicator={true}
      >
        <Image source={require("./../assests/edu.png")} style={styles.gif1} />
        <Image source={require("./../assests/gif1.png")} style={styles.gif1} />
        <Image source={require("./../assests/gif2.png")} style={styles.gif1} />
        <Image source={require("./../assests/Gym.gif")} style={styles.gif1} />
      </ScrollView>
      <View>
        <Text style={styles.coursetitle}>View Course</Text>
      </View>
      <ScrollView style={styles.coursescroll} horizontal>
        <Image
          source={require("./../assests/react.png")}
          style={styles.courseimage}
        />
        <Image
          source={require("./../assests/react.png")}
          style={styles.courseimage}
        />
        <Image
          source={require("./../assests/react.png")}
          style={styles.courseimage}
        />
        <Image
          source={require("./../assests/react.png")}
          style={styles.courseimage}
        />
        <Image
          source={require("./../assests/react.png")}
          style={styles.courseimage}
        />
      </ScrollView>
      <View>
        <Text style={styles.coursetitle}>Basic Popular Courses</Text>
      </View>
      <ScrollView horizontal>
        <TouchableOpacity
          style={styles.bestcourses}
          onPress={() =>
            navigation.navigate("about", {
              img: image6,
              name: "Basic Python",
            })
          }
        >
          <View>
            <Image
              source={require("./../assests/image6.png")}
              style={styles.bestimg}
            />
          </View>
          <View>
            <Text style={styles.coursetext}>Basic Python</Text>
            <Text>16 lessons</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bestcourses}      onPress={() =>
            navigation.navigate("about", {
              img: image7,
              name: "Basic Java",
            })
          }>
          <View>
            <Image
              source={require("./../assests/image7.png")}
              style={styles.bestimg}
            />
          </View>
          <View>
            <Text style={styles.coursetext}>Basic Java</Text>
            <Text>20 lessons</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bestcourses}      onPress={() =>
            navigation.navigate("about", {
              img: image6,
              name: "Basic React",
            })
          }>
          <View>
            <Image
              source={require("./../assests/image6.png")}
              style={styles.bestimg}
            />
          </View>
          <View>
            <Text style={styles.coursetext}>Basic React</Text>
            <Text>16 lessons</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bestcourses}      onPress={() =>
            navigation.navigate("about", {
              img: image9,
              name: "Basic JavaScript",
            })
          }>
          <View>
            <Image
              source={require("./../assests/image9.png")}
              style={styles.bestimg}
            />
          </View>
          <View>
            <Text style={styles.coursetext}>Basic JavaScript</Text>
            <Text>6 lessons</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    // padding: 50,
  },
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  img: {
    width: 60,
    height: 60,
  },
  searchbar: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    padding: 8,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 20,
  },
  gif1: {
    width: 550,
    height: 200,
    objectFit: "cover",
    // backgroundColor: "purple",
    marginLeft: -30,
    borderRadius: 13,
    marginTop: 15,
    marginRight: 10,
    borderRadius: 10,
  },
  scrol: {
    display: "flex",
    flexDirection: "row",
    // justifyContent:"center",
    marginHorizontal: 20,
  },
  coursetitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  courseimage: {
    width: 300,
    height: 200,
    objectFit: "fill",
    marginLeft: 10,
  },
  coursescroll: {
    display: "flex",
    flexDirection: "row",
  },
  bestimg: {
    width: 230,
    height: 200,
    objectFit: "cover",
  },
  bestcourses: {
    backgroundColor: "#fff", // optional: adds a background color to make the shadow visible
    borderRadius: 8, // optional: rounds the corners
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10, // required for Android shadow
    width: 250,
    marginLeft: 10,
  },
  coursetext: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
