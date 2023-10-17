// QuerySubscriptionFeeScreen.tsx

import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Colors from '../../constants/Colors';

const QuerySubscriptionFeeScreen: React.FC = () => {
  // Sample data for subscription fee details.
  const [subscriptionDetails, setSubscriptionDetails] = useState([
    {
      id: '1',
      date: '05 janv 2023',
      description: 'Monthly Subscription Fee',
      amount: '2 MAD',
    },
    {
      id: '2',
      date: '05 févr 2023',
      description: 'Monthly Subscription Fee',
      amount: '2 MAD',
    },
    {
      id: '3',
      date: '05 mars 2023',
      description: 'Monthly Subscription Fee',
      amount: '2 MAD',
    },
    {
      id: '4',
      date: '05 avril 2023',
      description: 'Monthly Subscription Fee',
      amount: '2 MAD',
    },
    {
      id: '5',
      date: '05 mai 2023',
      description: 'Monthly Subscription Fee',
      amount: '2 MAD',
    },
    {
      id: '6',
      date: '05 juin 2023',
      description: 'Monthly Subscription Fee',
      amount: '2 MAD',
    },
  ]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Query Subscription Fee</Text> */}

      <Text style={styles.detailsTitle}>Subscription Fee Details</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={subscriptionDetails}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.detailsItem}>
            <View style={styles.rowContainer}>
              <SimpleLineIcons
                name="calendar"
                size={16}
                color="#777"
                style={{marginRight: 10}}
              />
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
            <View style={styles.rowContainer}>
              <SimpleLineIcons
                name="note"
                size={16}
                color="#555"
                style={{marginRight: 10}}
              />
              <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
            <View style={styles.rowContainer}>
              <SimpleLineIcons
                name="wallet"
                size={16}
                color="#444"
                style={{marginRight: 10}}
              />
              <Text style={styles.amountText}>-{item.amount}</Text>
            </View>
          </View>
        )}
      />

      {/* <Button
        title="Back"
        onPress={() => {
          // Logic to go back to the previous screen or main dashboard
        }} */}
      {/* /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },

  detailsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginVertical: 10,
    marginLeft: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    // paddingHorizontal: 5,
  },
  detailsItem: {
    flexDirection: 'column',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
  },
  dateText: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  amountText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'red',
  },
});

export default QuerySubscriptionFeeScreen;
