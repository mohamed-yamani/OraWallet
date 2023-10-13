import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
// import { Feather, FontAwesome } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Transaction} from '../../types/wallet';

interface SearchComponentProps {
  setTransactionsData: React.Dispatch<React.SetStateAction<Transaction[]>>;
  transactionsData: Transaction[];
}

const SearchComponent = ({
  setTransactionsData,
  transactionsData,
}: SearchComponentProps) => {
  const [searchText, setSearchText] = useState('');
  const isRTL = false;
  const {t} = useTranslation();

  return (
    <View style={styles.search_container}>
      <Feather
        name="search"
        size={20}
        color={Colors.grayDark}
        style={styles.search_icon}
      />
      <TextInput
        style={[styles.search_input, {textAlign: isRTL ? 'right' : 'left'}]}
        onChangeText={text => {
          console.log('text --- fff', text);
          setSearchText(text);
          setTransactionsData(
            transactionsData.filter(
              transaction =>
                transaction.firstName.includes(text) ||
                transaction.lastName.includes(text) ||
                transaction.libelle.includes(text) ||
                transaction.type.includes(text),
            ),
          );
        }}
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
          style={styles.search_icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  search_container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.grayDark,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    height: 50,
  },
  search_input: {
    flex: 1,
  },
  search_icon: {
    marginHorizontal: 5,
  },
});

export default SearchComponent;
