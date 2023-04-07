import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import plans from "../data/plans";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRoute } from "@react-navigation/native";
const PlanScreen = () => {
  const data = plans;
  const [selected, setSelected] = useState([]);
  const [price, setPrice] = useState();
  const route = useRoute();
   const email = route.params.email;
  const password = route.params.password;
  const subscribe = () => {
       createUserWithEmailAndPassword(auth,email,password).then((userCredentials) => {
        console.log(userCredentials);
        const user = userCredentials.user;
        console.log(user.email);
      })
  };

  return (
    <>
      <ScrollView style={{ marginTop: 50 }}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Choose the plan that is right for you
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Feather name="check" size={24} color="#E50914" />
            <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
              Watch all you want Ad free
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
          >
            <Feather name="check" size={24} color="#E50914" />
            <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
              Recommendations just for you
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="check" size={24} color="#E50914" />
            <Text
              style={{
                marginLeft: 6,
                fontSize: 16,
                fontWeight: "600",
                marginTop: 3,
              }}
            >
              Cancel your Plan anytime
            </Text>
          </View>
          <View style={{ marginTop: 20 }} />
          {data.map((item) => (
            <Pressable
              onPress={() => {
                setSelected(item.name);
                setPrice(item.price);
              }}
              style={
                selected.includes(item.name)
                  ? {
                      height: 170,
                      borderRadius: 7,
                      borderColor: "#E50914",
                      borderWidth: 2,
                      padding: 15,
                      margin: 10,
                    }
                  : {
                      height: 170,
                      borderRadius: 7,
                      borderColor: "#E50914",
                      borderWidth: 0.5,
                      padding: 15,
                      margin: 10,
                    }
              }
              key={item.id}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#E50914",
                    padding: 10,
                    width: 120,
                    borderRadius: 7,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                  Price: ₹{item.price}
                </Text>
              </View>
              <View
                style={{
                  marginTop: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{ color: "gray", fontSize: 15, fontWeight: "500" }}
                  >
                    video Quality : {item.videoQuality}
                  </Text>
                  <Text
                    style={{ fontSize: 16, fontWeight: "500", marginTop: 3 }}
                  >
                    Resolution : {item.resolution}
                  </Text>
                </View>
                <Fontisto
                  style={{ marginRight: 6 }}
                  name="netflix"
                  size={28}
                  color="black"
                />
              </View>

              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 13.75 }}>
                  Devices You can watch On :{" "}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {item.devices.map((device) => (
                    <Entypo
                      style={{ marginRight: 6 }}
                      name={device.name}
                      size={20}
                      color="#E50914"
                    />
                  ))}
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      {selected.length > 0 ? (
        <Pressable
          style={{
            backgroundColor: "#E50914",
            padding: 10,
            marginBottom: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: 55,
          }}
        >
          <View>
            <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
              Selected Plan {selected}
            </Text>
          </View>

          <Pressable onPress={subscribe}>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              PAY ₹{price}
            </Text>
          </Pressable>
        </Pressable>
      ) : null}
    </>
  );
};

export default PlanScreen;

const styles = StyleSheet.create({});
