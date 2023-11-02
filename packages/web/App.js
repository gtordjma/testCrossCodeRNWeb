import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LogementCard } from "@test/ui";
import { useState } from "react";

export default function App() {
  const [nb, setNb] = useState(1);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.1,
          alignItems: "center",
          paddingTop: 50,
        }}
      >
        <Text>Web App Test</Text>
      </View>
      <StatusBar style="auto" />
      <View
        style={{
          flex: 0.45,
          justifyContent: "center",
        }}
      >
        <ScrollView
          contentContainerStyle={{
            height: "100vh",
            flexGrow: 1,
            alignItems: "center",
          }}
          showsVerticalScrollIndicator={false}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((e) => (
            <Pressable onPress={() => setNb(e)} style={{ width: "70%" }}>
              <LogementCard
                key={e}
                data={{
                  image: {
                    uri: "https://www.challenges.fr/assets/img/2022/10/26/cover-r4x3w1200-63595fc246f00-20220404-02.jpg",
                  }, // local image, or use a URI for remote images
                  name: `Logement ${e}`,
                  address: "4, Rue verbois\n75000 Paris",
                  price: "2 852 €",
                  occupationRate: 30, // for the slider
                  occupationToDate: 90,
                }}
              />
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          flex: 0.45,
          alignItems: "left",
          paddingTop: 50,
        }}
      >
        <Text>{`Logement ${nb}`}</Text>
        <Image
          source={{
            uri: "https://www.challenges.fr/assets/img/2022/10/26/cover-r4x3w1200-63595fc246f00-20220404-02.jpg",
          }}
          style={{ width: 50, height: 50, borderRadius: 12 }}
        />
        <Text>{"4, Rue verbois\n75000 Paris"}</Text>
        <Text>{`2 852 €`}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    flexDirection: "row",
  },
});
