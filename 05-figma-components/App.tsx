import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import Notice from './components/Notice';
import IconRow from './components/IconRow';
import SocialButton from './components/SocialButton';

export default function App() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>

        {/* Notice */}
        <Notice type="success" message='Checkout' label='7 items' />
        <Notice type="error" message='An error has occurred' />

        {/* Icon Row */}
        <IconRow mode="light" icons={["heart", "cart", "comment"]} />
        <IconRow mode="dark" icons={["heart", "heart"]} />

        {/* Social Buttons */}
        <SocialButton label='Facebook button' type='facebook' />
        <SocialButton label='Twitter button' align='right' />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 16,
    backgroundColor: '#ddd',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 16,
  },
});