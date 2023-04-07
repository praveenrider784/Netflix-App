import { StripeProvider } from '@stripe/stripe-react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { ProfileContext } from "./Context";


export default function App() {
  return (
      <>
       <ProfileContext>
      <StripeProvider Publishable key="pk_test_51MoD6LSC7Y6hb2sTvP4UUDby8pfpnfWj6TdSEvlSPLcP4lp6KA6GKeKGVZRDHhiLoJJ6zjaa5eRwVrXMJaLFtsOv0045X6eEcb">
      <StackNavigator/>
      <StatusBar style="auto" />
      </StripeProvider>
      </ProfileContext>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
