import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import Colors from '../../constants/Colors';

export default function CountdownTimer() {
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [countdown]);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <View>
      <Text style={{color: Colors.primary}}>{`${minutes}:${
        seconds < 10 ? '0' : ''
      }${seconds}`}</Text>
    </View>
  );
}
