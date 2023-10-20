// GenderSelection.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const GenderSelection = ({
  selectedGender,
  onGenderChange,
}: {
  selectedGender: string;
  onGenderChange: (value: string) => void;
}) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.label}>Genre</Text>

      <TouchableOpacity
        style={[styles.button, selectedGender === 'Male' && styles.selected]}
        onPress={() => onGenderChange('Male')}>
        <Text
          style={
            selectedGender === 'Male'
              ? styles.buttonTextSelected
              : styles.buttonText
          }>
          Male
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, selectedGender === 'Female' && styles.selected]}
        onPress={() => onGenderChange('Female')}>
        <Text
          style={
            selectedGender === 'Female'
              ? styles.buttonTextSelected
              : styles.buttonText
          }>
          Female
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, selectedGender === 'None' && styles.selected]}
        onPress={() => onGenderChange('None')}>
        <Text
          style={
            selectedGender === 'None'
              ? styles.buttonTextSelected
              : styles.buttonText
          }>
          None
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    fontWeight: '400',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    alignContent: 'center',
    alignItems: 'center',
    color: 'red',
    width: '100%',
    paddingTop: 10,
  },

  button: {
    padding: 10,
    width: 80,
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
  },

  selected: {
    backgroundColor: Colors.primary,
  },

  buttonTextSelected: {
    color: 'white',
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
  },

  buttonText: {
    color: Colors.midnightGray,
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
  },
});

export default GenderSelection;
