import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth from "@aws-amplify/auth";

export type Props = {
  currGroup?: any;
};

const GroupStats: React.FC<Props> = ({ currGroup }) => {
  return (
    <View style={styles.container}>
      <View style={styles.groupStats}>
        <Text style={styles.groupStatsTitle}>
          {currGroup.Item.GroupName} - Group Stats:
        </Text>
        {currGroup.Item.GroupMembers.map((member) => {
          if (Auth.user.username !== member.UserName) {
            return (
              <Text style={styles.groupStatsText} key={member.UserName}>
                <Text style={styles.groupStatsText}>{member.UserName} </Text>
                <Text style={styles.groupStatsText}>
                  Total Emissions: {member.TotalEmissions}
                </Text>
              </Text>
            );
          }
        })}
      </View>
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
});

export default GroupStats;
