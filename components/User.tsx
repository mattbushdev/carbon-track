import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GroupStats from "./GroupStats";
import UserStats from "./UserStats";
import { getUser, getGroup } from "../dbfunctions/dynamo.js";

export type Props = {
  navigation?: any;
};

interface user {
  Journey: any;
  TotalEmissions: number;
  EmissionsSaved: number;
  UserName: string;
  Vehicles: any;
  Groups: any;
}

const User: React.FC<Props> = ({ navigation }) => {
  const [currUser, setCurrUser] = useState<user | null>(null);
  const [hasErrored, setHasErrored] = useState(false);
  const [currGroup, setCurrGroup] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    getUser()
      .then((res) => {
        setCurrUser(res);
        setHasLoaded(true);
      })
      .catch((err) => {
        setHasErrored(true);
      });
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      getGroup(currUser?.Groups[currUser.Groups.length - 1])
        .then((res) => {
          setCurrGroup(res);
        })
        .catch((err) => {
          setHasErrored(true);
        });
    }
  }, [hasLoaded]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable
          style={styles.buttonHome}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.homeImage}
            source={require("../src/icons/home.png")}
          />
        </Pressable>
        <Image
          style={styles.logo}
          source={require("../src/icons/carbontrack.png")}
        />
      </View>
      <View style={styles.userHeader}>
        <Text style={styles.userWelcome}>
          Hey, {currUser ? currUser.UserName : "friend!"}
        </Text>
      </View>
      {currUser && (
        <View style={styles.statsContainer}>
          <UserStats currUser={currUser} />
        </View>
      )}
      <View style={styles.statsContainer}>
        {currGroup && <GroupStats currGroup={currGroup} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    width: "90%",
    height: 60,
  },
  buttonHome: {
    marginLeft: 30,
  },
  userHeader: {
    alignItems: "center",
    justifyContent: "center",
  },
  userWelcome: {
    color: "#2F4847",
    fontSize: 28,
    fontWeight: "bold",
  },
  statsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    borderRadius: 28,
    backgroundColor: "#D7E7E1",
    marginTop: 20,
  },
  homeImage: {
    height: 35,
    width: 35,
  },
  logo: {
    height: 35,
    width: 240,
    padding: 0,
    margin: 0,
  },
});

export default User;
