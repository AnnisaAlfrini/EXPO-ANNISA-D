import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Box Hitam */}
      <View style={styles.blackBox}>
        <Text style={styles.nama}>Annisa Alfrini</Text>
        <Text style={styles.nim}>105841112122</Text>
      </View>

      {/* Persegi Panjang berisi gambar apel */}
      <View style={styles.persegiPanjang}>
        <Image
          source={{ uri: "https://blog.pengajartekno.co.id/wp-content/uploads/2023/05/Gambar-Apel-Kartun-3.png" }}
          style={styles.image}
        />
      </View>

      {/* Segitiga */}
      <View style={styles.segitiga}></View>

      {/* Pill berisi icon dan teks di tengah */}
      <View style={styles.pill}>
        <Text style={styles.pillText}>⭐</Text>
        <Text style={styles.pillText}>105841112122</Text>
      </View>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#F5F5F5",
  },
  blackBox: {
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
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
  },
  pill: {
    backgroundColor: "#cceeff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  pillText: {
    fontSize: 16,
    color: "pink",
    textAlign: "center",
  },
});