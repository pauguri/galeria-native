import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Avatar from './components/Avatar';
import TitledSection from './components/TitledSection';
import Check from './components/Check';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style='light' />
      <TitledSection title='Avatars'>
        <Avatar name="Pau Guri" />
        <Avatar image={require('./assets/user.jpg')} />
      </TitledSection>
      <TitledSection title='Checks'>
        <Check read={false} />
        <Check read={true} />
        <Check double={true} />
      </TitledSection>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#000',
  },

  box: {
    width: 100,
    height: 200,
    backgroundColor: 'red',
    marginHorizontal: 12
  }
});
