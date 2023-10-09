import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
// import { Feather, FontAwesome } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');
  const isRTL = false;
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Feather
        name="search"
        size={20}
        color={Colors.grayDark}
        style={styles.icon}
      />
      <TextInput
        style={[styles.input, {textAlign: isRTL ? 'right' : 'left'}]}
        onChangeText={text => setSearchText(text)}
        value={searchText}
        placeholder={t('search') + '...'}
      />
      <TouchableOpacity
        onPress={() => {
          /* handle filter action here */
        }}>
        <FontAwesome
          name="sliders"
          size={20}
          color={Colors.grayDark}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.grayDark,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    height: 50,
  },
  input: {
    flex: 1,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default SearchComponent;
