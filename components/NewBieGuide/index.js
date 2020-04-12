import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import globalStyles from '../../styles/index';

export default class NewBieGuide extends React.Component {
  render() {
    return (
      <View style={globalStyles.body}>
        <View style={globalStyles.sectionContainer}>
          <Text style={globalStyles.sectionTitle}>Step One</Text>
          <Text style={globalStyles.sectionDescription}>
            Edit <Text style={NewBieGuideStyles.highlight}>App.js</Text> to
            change this screen and then come back to see your edits.
          </Text>
        </View>
        <View style={globalStyles.sectionContainer}>
          <Text style={globalStyles.sectionTitle}>See Your Changes</Text>
          <Text style={globalStyles.sectionDescription}>
            <ReloadInstructions />
          </Text>
        </View>
        <View style={globalStyles.sectionContainer}>
          <Text style={globalStyles.sectionTitle}>Debug</Text>
          <Text style={globalStyles.sectionDescription}>
            <DebugInstructions />
          </Text>
        </View>
        <View style={globalStyles.sectionContainer}>
          <Text style={globalStyles.sectionTitle}>Learn More</Text>
          <Text style={globalStyles.sectionDescription}>
            Read the docs to discover what to do next:
          </Text>
        </View>
        <LearnMoreLinks />
      </View>
    );
  }
}

const NewBieGuideStyles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});
