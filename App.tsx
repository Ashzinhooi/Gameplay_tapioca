import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Text>EVERYBODY</Text>
      <View style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#720d1b27',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'pink'
  },
});
