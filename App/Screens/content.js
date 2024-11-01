import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";

export default function Content({ route }) {
  const [view, setView] = useState(false);
  const navigation = useNavigation();
  const { title, subtitle, img } = route.params;
  return (
    <View>
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
      <Text style={style.title}>{title}</Text>
      <Text style={style.subtitle}>{subtitle}</Text>
      <Text style={style.para}>
        Python is a general-purpose, high-level programming language. Its design
        philosophy emphasizes code readability with its notable use of
        significant whitespace.Python is a general-purpose, high-level
        programming language. Its design philosophy emphasizes code readability
        with its notable use of significant whitespace. Python is a
        general-purpose, high-level programming language. Its design philosophy
        emphasizes code readability with its notable use of significant
        whitespace. Python is a general-purpose, high-level programming
        language. Its design philosophy emphasizes code readability with its
        notable use of significant whitespace. Python is a general-purpose,
        high-level programming language. Its design philosophy emphasizes code
        readability with its notable use of significant whitespace. Python is a
        general-purpose, high-level programming language. Its design philosophy
        emphasizes code readability with its notable use of significant
        whitespace.
      </Text>
      <View style={style.buttonContainer}>
        <Button
          title="Next"
          color="blue"
          onPress={() =>
            navigation.navigate("about", {
              img: img,
              name: title,
              message:subtitle,
            })
          }
        />
      </View>
    </View>
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
  title: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
  },
  subtitle: {
    paddingLeft: 10,
    fontWeight: "bold",
  },
  para: {
    padding: 10,
  },

  buttonContainer: {
    position: "absolute",
    bottom: -300,
    left: 30,
    right: 30,
    borderRadius: 13,
  },
});
