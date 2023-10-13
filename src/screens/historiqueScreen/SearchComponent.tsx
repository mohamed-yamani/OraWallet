import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Transaction} from '../../types/wallet';

interface SearchComponentProps {
  setTransactionsData: React.Dispatch<React.SetStateAction<Transaction[]>>;
  transactionsData: Transaction[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

const SearchComponent = ({
  setTransactionsData,
  transactionsData,
  setOpen,
  open,
}: SearchComponentProps) => {
  const [searchText, setSearchText] = useState('');

  const isRTL = false;
  const {t} = useTranslation();

  return (
    <>
      <Pressable style={styles.search_container} onPress={() => setOpen(false)}>
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
                  transaction.firstName
                    .toLowerCase()
                    .includes(text.toLocaleLowerCase()) ||
                  transaction.lastName
                    .toLowerCase()
                    .includes(text.toLowerCase()) ||
                  transaction.libelle
                    .toLowerCase()
                    .includes(text.toLowerCase()) ||
                  transaction.type.toLowerCase().includes(text.toLowerCase()),
              ),
            );
          }}
          value={searchText}
          placeholder={t('search') + '...'}
        />
        <TouchableOpacity
          onPress={() => {
            setOpen(!open);
          }}>
          <FontAwesome
            name="sliders"
            size={20}
            color={Colors.grayDark}
            style={styles.search_icon}
          />
        </TouchableOpacity>
      </Pressable>
      {open && (
        <DropDownPicker
          containerStyle={{paddingHorizontal: 20, left: 20, top: 5}}
          style={{
            zIndex: 1000,
            position: 'absolute',
          }}
          open={open}
          value={null}
          modalProps={{
            animationType: 'fade',
          }}
          items={[
            {label: 'All', value: 'all'},
            {label: 'Sent', value: 'D'},
            {label: 'Received', value: 'C'},
          ]}
          setOpen={setOpen}
          setValue={value => {}}
          setItems={value => {}}
          onSelectItem={value => {
            console.log('value --- aaaaaaaaa --- >', value.value);
            if (value.value === 'all') {
              setTransactionsData(transactionsData);
            } else {
              setTransactionsData(
                transactionsData.filter(
                  transaction => transaction.transSign === value.value,
                ),
              );
            }
          }}
          // onChangeValue={value => {
          //   console.log('value --- ddddddd --- >', value);
          //   if (value === 'all') {
          //     setTransactionsData(transactionsData);
          //   } else {
          //     setTransactionsData(
          //       transactionsData.filter(
          //         transaction => transaction.transSign === value,
          //       ),
          //     );
          //   }
          // }}
        />
      )}
    </>
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
