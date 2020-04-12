import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class ColorPicker extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <Text>Color Picker</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
});
