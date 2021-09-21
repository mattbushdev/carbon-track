import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { addGroup, addUserToGroup } from "../dbfunctions/dynamo";


const UserDetails: React.FC<Props> = ({ navigation }) => {
  const [createGroupCode, setCreateGroupCode] = useState(null);
  const [createGroupName, setCreateGroupName] = useState("");
  const [createGroup, setCreateGroup] = useState({});
  const [joinGroupCode, setJoinGroupCode] = useState(null);
  const [joinGroupName, setJoinGroupName] = useState("");
  const [joinGroup, setJoinGroup] = useState({});
  const [hasErrored, setHasErrored] = useState(false);



const UserDetails: React.FC<Props> = ({ navigation }) => {
  const [createGroupCode, setCreateGroupCode] = useState(null);
  const [createGroupName, setCreateGroupName] = useState("");
  const [createGroup, setCreateGroup] = useState({});
  const [joinGroupCode, setJoinGroupCode] = useState(null);
  const [joinGroupName, setJoinGroupName] = useState("");
  const [joinGroup, setJoinGroup] = useState({});
  const [hasErrored, setHasErrored] = useState(false);

  // const navigation = useNavigation();

  const handleCreateSubmit = () => {
    const newGroup = { ...createGroup };
    newGroup.GroupCode = createGroupCode;
    newGroup.GroupName = createGroupName;
    console.log(newGroup, "new group");
    addGroup(newGroup)
      .then(() => {
        setCreateGroup(newGroup);
        console.log(createGroup, "state");
        setCreateGroupCode(null);
        setCreateGroupName("");
      })
      .catch((err) => setHasErrored(true));
    //nothing executed after addGroup called
  };

  const handleJoinSubmit = () => {
    const newGroup = { ...joinGroup };
    newGroup.GroupCode = joinGroupCode;
    newGroup.GroupName = joinGroupName;
    addUserToGroup(newGroup).catch((err) => setHasErrored(true));
    console.log(newGroup, "join group");
    setJoinGroup(newGroup);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.form}>
          <Text style={styles.title}>Create Group:</Text>
          <View style={styles.formContainer}>
            <Text style={styles.formLabel}>code:</Text>
            <TextInput
              placeholder={"1234"}
              style={styles.formInput}
              onChangeText={(createGroupCode) =>
                setCreateGroupCode(createGroupCode)
              }
            />
            <Text style={styles.formLabel}>group name:</Text>
            <TextInput
              placeholder={"asynchrosaurus"}
              style={styles.formInput}
              onChangeText={(createGroupName) =>
                setCreateGroupName(createGroupName)
              }
            />
            <Pressable style={styles.buttonForm} onPress={handleCreateSubmit}>
              <Text style={styles.buttonFormText}>Create</Text>
            </Pressable>
          </View>
          <Text style={styles.title}>Join Group:</Text>
          <View style={styles.formContainer}>
            <Text style={styles.formLabel}>code:</Text>
            <TextInput
              placeholder="4321"
              style={styles.formInput}
              onChangeText={(joinGroupCode) => setJoinGroupCode(joinGroupCode)}
            />
            <Text style={styles.formLabel}>group name:</Text>
            <TextInput
              placeholder={"green team"}
              style={styles.formInput}
              onChangeText={(joinGroupName) => setJoinGroupName(joinGroupName)}
            />
            <Pressable style={styles.buttonForm} onPress={handleJoinSubmit}>
              <Text style={styles.buttonFormText}>Join</Text>
            </Pressable>
          </View>
          <Pressable
            style={styles.buttonForm}
            onPress={() => navigation.navigate("UserDetails")}
          >
            <Text style={styles.buttonFormText}>Ridin' Solo</Text>
          </Pressable>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  form: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    // borderColor: "red",
    // borderWidth: 2,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 4,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "25%",
    borderRadius: 28,
    backgroundColor: "#D7E7E1",
    width: "90%",
  },
  formLabel: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
    textAlign: "center",
  },

  formInput: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "white",
    height: "15%",
    width: 160,
  },
  buttonForm: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2F4847",
    backgroundColor: "#2F4847",
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    width: 110,
    height: "16%",
    marginTop: 15,
    marginBottom: 15,
  },
  buttonFormText: {
    color: "white",
    fontSize: 18,
  },
  buttonSolo: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2F4847",
    backgroundColor: "#2F4847",
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    width: 110,
    marginTop: 15,
    marginBottom: 15,
  },
  image: {
    height: 125,
    width: 150,
  },
});

export default UserDetails;
