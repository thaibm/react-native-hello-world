import React from 'react';
import {StyleSheet, View, Text, Slider, TextInput} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import globalStyles from '../../styles/index';

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 0,
      blue: 0,
      green: 0,
    };
  }
  render() {
    return (
      <View style={globalStyles.body}>
        <View style={globalStyles.sectionContainer}>
          <Text style={globalStyles.sectionTitle}>Color Picker</Text>
          <View style={styles.pickerArea}>
            <View style={[styles.pickerItem, styles.redItem]}>
              <Text style={styles.itemText}>Red</Text>
              <Slider style={styles.itemSlide} />
              <TextInput style={styles.itemValue} />
            </View>
            <View style={[styles.pickerItem, styles.greenItem]}>
              <Text style={styles.itemText}>Green</Text>
              <Slider style={styles.itemSlide} />
              <TextInput style={styles.itemValue} />
            </View>
            <View style={[styles.pickerItem, styles.blueItem]}>
              <Text style={styles.itemText}>Blue</Text>
              <Slider style={styles.itemSlide} />
              <TextInput style={styles.itemValue} />
            </View>
          </View>
          <View
            style={[
              styles.previewArea,
              {
                // backgroundColor: rgb(this.state.red, this.state.green, this.state.blue),
              },
            ]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerArea: {
    // backgroundColor: 'green',
    height: 100,
  },
  previewArea: {
    // backgroundColor: 'yellow',
    height: 300,
  },
  pickerItem: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  itemText: {},
  itemSlider: {
    width: 200,
  },
  itemValue: {
    width: 50,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
  },
  redItem: {
    // backgroundColor: 'red',
  },
  greenItem: {
    // backgroundColor: 'green',
  },
  blueItem: {
    // backgroundColor: 'blue',
  },
});
