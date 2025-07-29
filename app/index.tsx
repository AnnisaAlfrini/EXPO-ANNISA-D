import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';



const IconScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>10 Ikon Berbeda</Text>

      <View style={styles.iconRow}>
  <AntDesign name="star" size={24} color="#FFD700" />
  <AntDesign name="smileo" size={24} color="#FF69B4" />
  <AntDesign name="rocket1" size={24} color="#00BFFF" />
  <AntDesign name="camerao" size={24} color="#8E44AD" />
  <AntDesign name="hearto" size={24} color="#E74C3C" />
  <Entypo name="tree" size={24} color="#27AE60" />
  <Entypo name="flower" size={24} color="#F39C12" />
  <Entypo name="game-controller" size={24} color="#2980B9" />
  <AntDesign name="car" size={24} color="#16A085" />
  <Entypo name="moon" size={24} color="#34495E" />
</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
});

export default IconScreen;