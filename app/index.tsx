import React, { useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

interface FontEntry {
  displayName: string;
  fontName: string;
  category: 'static' | 'variable';
}

export default function FontShowcase(): JSX.Element | null {
  const [fontsInitialized] = useFonts({
    // Variable Fonts
    'PlaywriteHUVariable': require('@/assets/fonts/PlaywriteHU-Variable.ttf'),
    'LoraVariable': require('@/assets/fonts/Lora-Variable.ttf'),
    'NunitoVariable': require('@/assets/fonts/Nunito-Variable.ttf'),
    'RubikVariable': require('@/assets/fonts/Rubik-Variable.ttf'),
    'MerriweatherVariable': require('@/assets/fonts/Merriweather-Variable.ttf'),

    // Static Fonts
    'PlaywriteHU-Regular': require('@/assets/fonts/PlaywriteHU-Regular.ttf'),
    'Lora-Regular': require('@/assets/fonts/Lora-Regular.ttf'),
    'Nunito-Regular': require('@/assets/fonts/Nunito-Regular.ttf'),
    'Rubik-Regular': require('@/assets/fonts/Rubik-Regular.ttf'),
    'Merriweather-Regular': require('@/assets/fonts/Merriweather-Regular.ttf'),
  });

  const initAppLayout = useCallback(async () => {
    if (fontsInitialized) {
      await SplashScreen.hideAsync();
    }
  }, [fontsInitialized]);

  if (!fontsInitialized) {
    return null;
  }

  // Data entries for display
  const fontEntries: FontEntry[] = [
    // Pre-stambuk entries
    { displayName: "M.Ray Togubu", fontName: "PlaywriteHU-Regular", category: "static" },
    { displayName: "Jey Jey Asbar", fontName: "Lora-Regular", category: "static" },
    { displayName: "Rezki Asriani", fontName: "Nunito-Regular", category: "static" },
    { displayName: "Hardita Subanda", fontName: "Rubik-Regular", category: "static" },
    { displayName: "Ari Ahmad Dahril", fontName: "Merriweather-Regular", category: "static" },

    // Post-stambuk entries
    { displayName: "Dzulviana", fontName: "PlaywriteHUVariable", category: "variable" },
    { displayName: "Hiswan Halim", fontName: "LoraVariable", category: "variable" },
    { displayName: "Isnandar", fontName: "NunitoVariable", category: "variable" },
    { displayName: "Muh. Dzikri Alfauzan Nuzul", fontName: "RubikVariable", category: "variable" },
    { displayName: "Nisa Natayanti", fontName: "MerriweatherVariable", category: "variable" },
  ];

  const staticFontEntries = fontEntries.filter(entry => entry.category === 'static');
  const variableFontEntries = fontEntries.filter(entry => entry.category === 'variable');

  const FontItem = ({ item, index }: { item: FontEntry; index: number }) => (
    <View key={index} style={styles.entryBox}>
      <Text style={[styles.entryText, { fontFamily: item.fontName }]}>
        {item.displayName}
      </Text>
      <Text style={styles.metaText}>
        Font: {item.fontName} ({item.category})
      </Text>
    </View>
  );

  const FontDemoSection = () => (
    <View style={styles.sectionBox}>
      <Text style={styles.headingText}>
        Variable Font Weight Examples
      </Text>

      {[100, 300, 400, 600, 700, 900].map(weight => (
        <Text key={weight} style={[
          styles.demoText,
          { fontFamily: "LoraVariable", fontWeight: `${weight}` as any }
        ]}>
          Inter Variable - {getWeightName(weight)} ({weight})
        </Text>
      ))}
    </View>
  );

  const StatsDisplay = () => (
    <View style={styles.statsContainer}>
      <Text style={styles.statsHeader}>Font Statistics</Text>
      <View style={styles.statsGrid}>
        {[
          { value: 10, label: 'Total Fonts' },
          { value: 5, label: 'Static Fonts' },
          { value: 5, label: 'Variable Fonts' },
          { value: 10, label: 'Total Entries' },
        ].map((stat, idx) => (
          <View key={idx} style={styles.statCard}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statName}>{stat.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer} onLayout={initAppLayout}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
        backgroundColor="#f8f9fa"
      />
      <ScrollView
        contentContainerStyle={styles.contentWrapper}
        showsVerticalScrollIndicator={false}
      >
        {/* Static Fonts Section */}
        <View style={styles.sectionBox}>
          <Text style={styles.headingText}>
            Static Typefaces (5)
          </Text>
          <Text style={styles.subHeadingText}>
            Pre-stambuk entries
          </Text>
          {staticFontEntries.map((item, idx) => (
            <FontItem key={idx} item={item} index={idx} />
          ))}
        </View>

        {/* Variable Fonts Section */}
        <View style={styles.sectionBox}>
          <Text style={styles.headingText}>
            Variable Typefaces (5)
          </Text>
          <Text style={styles.subHeadingText}>
            Post-stambuk entries
          </Text>
          {variableFontEntries.map((item, idx) => (
            <FontItem key={idx} item={item} index={idx + 5} />
          ))}
        </View>

        <FontDemoSection />
        <StatsDisplay />
      </ScrollView>
    </SafeAreaView>
  );
}

// Helper function for font weight names
function getWeightName(weight: number): string {
  const weights: Record<number, string> = {
    100: 'Thin',
    300: 'Light',
    400: 'Regular',
    600: 'SemiBold',
    700: 'Bold',
    900: 'Black'
  };
  return weights[weight] || weight.toString();
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  contentWrapper: {
    padding: 20,
    paddingBottom: 40,
  },
  sectionBox: {
    marginBottom: 25,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2c3e50',
  },
  subHeadingText: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  entryBox: {
    marginBottom: 15,
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  entryText: {
    fontSize: 22,
    marginBottom: 6,
    color: '#2c3e50',
    lineHeight: 28,
  },
  metaText: {
    fontSize: 12,
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
  demoText: {
    fontSize: 18,
    marginBottom: 12,
    color: '#34495e',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
    lineHeight: 24,
  },
  statsContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2c3e50',
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  statCard: {
    alignItems: 'center',
    marginVertical: 10,
    minWidth: '40%',
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  statName: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
});