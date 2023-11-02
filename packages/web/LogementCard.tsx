import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const HorizontalLine = () => {
  return <View style={styles.line} />;
};

const ProgressBar = ({color, value}) => {
  return (
    <View style={{marginVertical: 5}}>
      <View style={{height: 3, backgroundColor: "#E2E8F0"}} />
      <View style={{position: "absolute", height: 3, backgroundColor: color, width: value}} />
    </View>
  );
};

export const LogementCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={data.image} style={styles.image} />
        <View style={styles.address}>
          <Text style={{ color: "#2F3A50", fontWeight: "bold" }}>
            {data.name}
          </Text>
          <Text style={{ color: "#718096" }}>{data.address}</Text>
        </View>
      </View>
      <HorizontalLine />
      <View style={styles.footer}>
        <View style={{justifyContent: "space-between"}}>
          <Text style={{ color: "#6366F1", fontWeight: "bold", fontSize: 20 }}>
            {data.price}
          </Text>
          <Text style={{ color: "#718096" }}>CA ventilé</Text>
        </View>
        <View>
          <Text style={{ color: "#2F3A50", fontWeight: "bold" }}>
            {data.occupationRate}%
          </Text>
          <ProgressBar color="#FF337A" value={data.occupationRate}/>
          <Text style={{ color: "#718096" }}>Taux d’occupation</Text>
        </View>
        <View>
          <Text style={{ color: "#2F3A50", fontWeight: "bold" }}>
            {data.occupationToDate}%
          </Text>
          <ProgressBar color="#4FD1C5" value={data.occupationToDate}/>
          <Text style={{ color: "#718096" }}>Occupation à date</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 1, // 1 pixel
    backgroundColor: "#E2E8F0", // Change this to any color you want
    width: "100%",
  },
  container: {
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5, // for Android
    shadowColor: "#000", // for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: "45%",
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  address: {
    marginLeft: 10,
  },
  footer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
