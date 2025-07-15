import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const gridImages = [
  { id: 1, mainSrc: "https://picsum.photos/id/10/200", altSrc: "https://picsum.photos/id/1010/200" },
  { id: 2, mainSrc: "https://picsum.photos/id/11/200", altSrc: "https://picsum.photos/id/1011/200" },
  { id: 3, mainSrc: "https://picsum.photos/id/12/200", altSrc: "https://picsum.photos/id/1012/200" },
  { id: 4, mainSrc: "https://picsum.photos/id/13/200", altSrc: "https://picsum.photos/id/1013/200" },
  { id: 5, mainSrc: "https://picsum.photos/id/14/200", altSrc: "https://picsum.photos/id/1014/200" },
  { id: 6, mainSrc: "https://picsum.photos/id/15/200", altSrc: "https://picsum.photos/id/1015/200" },
  { id: 7, mainSrc: "https://picsum.photos/id/16/200", altSrc: "https://picsum.photos/id/1016/200" },
  { id: 8, mainSrc: "https://picsum.photos/id/17/200", altSrc: "https://picsum.photos/id/1017/200" },
  { id: 9, mainSrc: "https://picsum.photos/id/18/200", altSrc: "https://picsum.photos/id/1018/200" },
];

export default function Index() {
  const [imageStates, setImageStates] = useState(
    gridImages.map(() => ({
      showAlt: false,
      scale: 1,
    }))
  );

  const handleImagePress = (index) => {
    setImageStates((prevStates) => {
      const newStates = [...prevStates];
      const current = newStates[index];

      // toggle image and increase scale, max 2.0
      const newScale = Math.min(current.scale * 1.2, 2.0);
      newStates[index] = {
        showAlt: !current.showAlt,
        scale: newScale,
      };
      return newStates;
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Box Hitam */}
      <View style={styles.blackBox}>
        <Text style={styles.nama}>Annisa Alfrini</Text>
        <Text style={styles.nim}>105841112122</Text>
      </View>

      {/* Persegi Panjang berisi gambar apel */}
      <View style={styles.persegiPanjang}>
        <Image
          source={{
            uri: "https://blog.pengajartekno.co.id/wp-content/uploads/2023/05/Gambar-Apel-Kartun-3.png",
          }}
          style={styles.image}
        />
      </View>

      {/* Segitiga */}
      <View style={styles.segitiga} />

      {/* Pill */}
      <View style={styles.pill}>
        <Text style={styles.pillText}>⭐</Text>
        <Text style={styles.pillText}>105841112122</Text>
      </View>

      {/* Grid 3x3 */}
      <View style={styles.gridWrapper}>
        {gridImages.map((img, index) => (
          <TouchableOpacity key={img.id} onPress={() => handleImagePress(index)}>
            <Image
              source={{ uri: imageStates[index].showAlt ? img.altSrc : img.mainSrc }}
              style={[
                styles.gridImageFixed,
                { transform: [{ scale: imageStates[index].scale }] },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#F5F5F5",
  },
  blackBox: {
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  nama: {
    color: "pink",
    fontSize: 25,
  },
  nim: {
    fontWeight: "bold",
    color: "lightblue",
  },
  persegiPanjang: {
    width: 200,
    height: 100,
    backgroundColor: "grey",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  segitiga: {
    width: 0,
    height: 0,
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 60,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "purple",
    marginBottom: 20,
  },
  pill: {
    backgroundColor: "#cceeff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  pillText: {
    fontSize: 16,
    color: "pink",
    textAlign: "center",
  },
  gridWrapper: {
    width: 320, // 3 kolom × 100px + margin
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridImageFixed: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
});
