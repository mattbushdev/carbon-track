import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth from "@aws-amplify/auth";

export type Props = {
  currGroup?: {
    Item: {
      GroupCode: string;
      GroupCreator: string;
      GroupMembers: user[];
      GroupName: string;
    };
  };
};

interface user {
  TotalEmissions: number;
  EmissionsSaved: number;
  UserName: string;
}

const GroupStats: React.FC<Props> = ({ currGroup }) => {
  const [authUser, setAuthUser] = useState<string | null>(null);

  const getAuthUser = async () => await Auth.currentUserInfo();
  getAuthUser().then((res) => {
    setAuthUser(res.username);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.groupStatsTitle}>
        {currGroup?.Item.GroupName} - Group Stats:
      </Text>
      {currGroup?.Item.GroupMembers.map((member) => {
        if (authUser !== member?.UserName) {
          return (
            <Text style={styles.groupStatsText} key={member?.UserName}>
              <Text style={styles.groupStatsTextBold}>
                {member?.UserName} -{" "}
              </Text>
              <Text style={styles.groupStatsText}>
                Total Emissions: {member?.TotalEmissions}
              </Text>
            </Text>
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  groupStatsTitle: {
    color: "#2F4847",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 15,
  },
  groupStatsText: {
    fontSize: 18,
    textTransform: "capitalize",
    marginBottom: 10,
  },
  groupStatsTextBold: {
    fontWeight: "bold",
    color: "#2F4847",
  },
});

export default GroupStats;
