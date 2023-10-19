import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {HorizontalLine} from '../IconTextEnhancedInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../constants/Colors';
import PersonIcon from '../../../assets/images/svgs/person.svg';

const GenderSelector = ({
  selectedGender,
  onGenderChange,
}: {
  selectedGender: string;
  onGenderChange: (gender: string) => void;
}) => {
  return (
    <View style={styles.container}>
      {/* <MaterialIcons name="wc" size={24} color={Colors.primary} /> */}
      <PersonIcon width={14} height={16} />
      <HorizontalLine />
      <TouchableOpacity
        style={styles.radioContainer}
        onPress={() => onGenderChange('M')}>
        <View
          style={[styles.radio, selectedGender === 'M' && styles.selected]}
        />
        <Text style={styles.radioLabel}>Male</Text>
      </TouchableOpacity>
      <View style={{width: 20}} />
      <TouchableOpacity
        style={styles.radioContainer}
        onPress={() => onGenderChange('MME')}>
        <View
          style={[styles.radio, selectedGender === 'MME' && styles.selected]}
        />
        <Text style={styles.radioLabel}>Female</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D1D6',
    borderRadius: 8,
    paddingHorizontal: 20,
    height: 50,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    color: 'gray',
    fontFamily: 'Nunito-Regular',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 8,
  },
  selected: {
    backgroundColor: Colors.primary,
  },
  radioLabel: {
    fontSize: 16,
    color: 'gray',
    fontFamily: 'Nunito-Regular',
  },
});

export default GenderSelector;
