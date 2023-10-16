import React, {useEffect, useState} from 'react';
import {
  FlatList,
  TouchableWithoutFeedback,
  Modal,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

interface Country {
  code: string;
  item: string;
  callingCode: string;
  flag: string;
}

const CountryCodePicker = ({setCountryCode}: {setCountryCode: any}) => {
  const [areas, setAreas] = useState<Country[]>([]);
  const [selectedArea, setSelectedArea] = useState<Country | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => {
        let areaData: Country[] = data.map(
          (item: {
            alpha2Code: any;
            name: any;
            callingCodes: any[];
            flags: {png: any};
          }) => ({
            code: item.alpha2Code,
            item: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: item.flags.png,
          }),
        );

        setAreas(areaData);

        const defaultData = areaData.find(a => a.code === 'MA');
        if (defaultData) setSelectedArea(defaultData);
      });
  }, []);

  const renderItem = ({item}: {item: Country}) => (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}
      onPress={() => {
        setSelectedArea(item);
        setModalVisible(false);
        setCountryCode(item.callingCode);
      }}>
      <Image
        source={{uri: item.flag}}
        style={{height: 30, width: 50, marginRight: 10}}
      />
      <Text style={{fontSize: 16, color: '#fff'}}>{item.item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{alignItems: 'center'}}>
      <View style={{width: '100%'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              width: 100,
              //   height: 50,
              marginHorizontal: 5,
              paddingBottom: 10,

              flexDirection: 'row',
            }}
            onPress={() => setModalVisible(true)}>
            <View style={{justifyContent: 'center', marginLeft: 5}}>
              <Image
                source={{
                  uri: selectedArea ? selectedArea.flag : 'null',
                }}
                resizeMode="contain"
                style={{width: 30, height: 20}}
              />
            </View>
            <View
              style={{justifyContent: 'center', marginLeft: 5, marginTop: 2}}>
              <Text style={{color: '#111', fontSize: 14}}>
                {selectedArea?.callingCode}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {modalVisible && (
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 400,
                  width: Dimensions.get('window').width * 0.8,

                  backgroundColor: 'gray',
                  borderRadius: 12,
                }}>
                <FlatList
                  data={areas}
                  renderItem={renderItem}
                  keyExtractor={item => item.code}
                  showsVerticalScrollIndicator={false}
                  style={{padding: 20, marginBottom: 20}}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
};

export default CountryCodePicker;
