import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NameIcon from '../NameIcon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_NAMES} from '../../navigation/routeNames';
import Colors from '../../constants/Colors';

const data = [
  {
    name: 'John',
    lastName: 'Doe',
    image: require('../../assets/images/pr1.jpg'),
  },
  {name: 'Katherine', lastName: 'Fisher', image: null},
  {
    name: 'James',
    lastName: 'Lee',
    image: require('../../assets/images/pr2.png'),
  },
  {
    name: 'Melissa',
    lastName: 'Jones',
    image: require('../../assets/images/pr3.jpg'),
  },
  {name: 'Robert', lastName: 'Brown', image: null},
  {name: 'Michael', lastName: 'Wilson', image: null},
  {name: 'William', lastName: 'Miller', image: null},
  {name: 'David', lastName: 'Moore', image: null},
  {name: 'Richard', lastName: 'Taylor', image: null},
  {name: 'Thomas', lastName: 'Anderson', image: null},
  {name: 'Charles', lastName: 'Thomas', image: null},
];

const RecipientScrollList = () => {
  const {navigate} = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 12,
        }}>
        <Text
          style={{
            color: Colors.midnightGray,
            fontSize: 16,
            fontFamily: 'Nunito-Medium',
          }}>
          {'destinataires'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigate(ROUTE_NAMES.REFIL_STACK.DESTINATAIRES as never);
          }}>
          <Text style={{color: Colors.primary}}>{'seeAll'}</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <ScrollView
          horizontal={true}
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.iconContainer}>
            <Text style={styles.initials}>{'+'}</Text>
          </View>
          {data.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  paddingLeft: index === 0 ? 5 : 0,
                  paddingRight: index === data.length - 1 ? 15 : 0,
                }}>
                <NameIcon
                  key={index}
                  name={item.name}
                  lastName={item.lastName}
                  image={item.image}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default RecipientScrollList;

const styles = StyleSheet.create({
  scrollView: {
    marginLeft: -20,
    marginRight: -20,
    height: 100,
    width: '100%',
  },

  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: '#d2e7df',
  },
  initials: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.primary,
    fontFamily: 'Nunito-Black',
  },
});
