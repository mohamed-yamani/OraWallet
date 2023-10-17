// UserListScreen.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Colors from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_NAMES} from '../../navigation/routeNames';

const UserListScreen: React.FC = () => {
  const navigation = useNavigation();

  const users = [
    {
      id: '4',
      name: 'Samira Ahmed',
      imageUrl: 'https://placekitten.com/203/203',
    },
    {
      id: '11',
      name: 'Omar El-Sayed',
      imageUrl: 'https://placekitten.com/210/210',
    },
    {
      id: '12',
      name: 'Fatima Zahra',
      imageUrl: 'https://placekitten.com/211/211',
    },
    {
      id: '13',
      name: 'Hassan Mahmoud',
      imageUrl: 'https://placekitten.com/212/212',
    },
    {id: '14', name: 'Lina Fawzi', imageUrl: 'https://placekitten.com/213/213'},
    {
      id: '15',
      name: 'Adnan Khaled',
      imageUrl: 'https://placekitten.com/214/214',
    },
    {
      id: '16',
      name: 'Rania Salah',
      imageUrl: 'https://placekitten.com/215/215',
    },
    {
      id: '17',
      name: 'Tariq Al-Jabri',
      imageUrl: 'https://placekitten.com/216/216',
    },
    {id: '18', name: 'Aisha Badr', imageUrl: 'https://placekitten.com/217/217'},
    {
      id: '19',
      name: 'Ibrahim Zidan',
      imageUrl: 'https://placekitten.com/218/218',
    },
    {
      id: '20',
      name: 'Zahra Moussa',
      imageUrl: 'https://placekitten.com/219/219',
    },
    {id: '5', name: 'Karim Abdel', imageUrl: 'https://placekitten.com/204/204'},
    {
      id: '6',
      name: 'Layla Farouk',
      imageUrl: 'https://placekitten.com/205/205',
    },
    {id: '7', name: 'Ahmed Fathi', imageUrl: 'https://placekitten.com/206/206'},
    {
      id: '8',
      name: 'Hana Al-Khouri',
      imageUrl: 'https://placekitten.com/207/207',
    },
    {
      id: '9',
      name: 'Bilal Kassim',
      imageUrl: 'https://placekitten.com/208/208',
    },
    {
      id: '10',
      name: 'Nadia El-Mansour',
      imageUrl: 'https://placekitten.com/209/209',
    },
    {id: '1', name: 'John Doe', imageUrl: 'https://placekitten.com/200/200'},
    {id: '2', name: 'Jane Smith', imageUrl: 'https://placekitten.com/201/201'},
    {
      id: '3',
      name: 'Alice Johnson',
      imageUrl: 'https://placekitten.com/202/202',
    },
    {
      id: '4',
      name: 'Bob Williams',
      imageUrl: 'https://placekitten.com/203/203',
    },
    {
      id: '5',
      name: 'Charlie Brown',
      imageUrl: 'https://placekitten.com/204/204',
    },
    {id: '6', name: 'David Jones', imageUrl: 'https://placekitten.com/205/205'},
    {id: '7', name: 'Eva Green', imageUrl: 'https://placekitten.com/206/206'},
    {id: '8', name: 'Frank White', imageUrl: 'https://placekitten.com/207/207'},
    {id: '9', name: 'Grace Hall', imageUrl: 'https://placekitten.com/208/208'},
    {id: '10', name: 'Hank Moody', imageUrl: 'https://placekitten.com/209/209'},
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.userContainer}
            onPress={() =>
              navigation.navigate(ROUTE_NAMES.CHAT_STACK.CHAT, {
                userId: item.id,
                userName: item.name,
                userImageUrl: item.imageUrl,
              })
            }>
            <Image source={{uri: item.imageUrl}} style={styles.profileImage} />
            <Text style={styles.userName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  userContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    color: '#333',
    fontFamily: 'Nunito-Bold',
  },
});

export default UserListScreen;
