import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlaceCard from '../components/PlaceCard';

const appName = 'Wanderlist';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Welcome to {appName}</Text>
        <Text style={styles.tagline}>Places I dream of visiting</Text>

        <Image
          source={{ uri: 'https://picsum.photos/600/300' }}
          style={styles.image}
        />

        <View style={styles.headingRow}>
          <Text style={styles.heading}>My places</Text>
          <Text>2 saved</Text>
        </View>

        <PlaceCard
          name="Banff"
          category="Nature"
          notes="See the mountains and Lake Louise."
        />
        <PlaceCard
          name="Paris"
          category="City"
          notes="Visit the Eiffel Tower and explore cafés."
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f1f7f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#174d45',
  },
  tagline: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 170,
    borderRadius: 12,
    marginBottom: 20,
  },
  headingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});