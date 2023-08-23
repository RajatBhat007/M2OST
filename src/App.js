
import React from 'react';
import { StatusBar, StyleSheet,View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { URL } from './shared/constant/environment';
import WebView from 'react-native-webview';
import { WHITE } from './shared/constant/color';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
      <View style={styles.container}>
        <WebView source={{ uri: URL }} />
      </View>
    </SafeAreaProvider>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
