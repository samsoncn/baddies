/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      height: '100%',
    },
    textInput: {
      height: 50,
      backgroundColor: '#eee',
      marginVertical: 5,
    },
  });

  return (
    // <SafeAreaView style={backgroundStyle}>
    <SafeAreaView>
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          style={{textInput: styles.textInput}}
          query={{
            key: 'AIzaSyDcl8LRwgQVBWo5s2McOY_N12YTjqs_vZc',
            language: 'en',
          }}
        />
        {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
