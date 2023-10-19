import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../constants/Colors';
import {launchImageLibrary} from 'react-native-image-picker';
const UploadButton = () => {
  const [imageSource, setImageSource] = useState(null);

  const openImagePicker = () => {
    const setSelectedImage = (imageUri: any) => {
      setImageSource({uri: imageUri});
    };

    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options as any, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.uploadTextAndIconContainer}
        onPress={openImagePicker}>
        <Text style={styles.uploadButtonText}>Upload Image</Text>
        {imageSource ? (
          <Image source={imageSource} style={styles.uploadedImage} />
        ) : (
          <Feather
            name="upload"
            size={24}
            color={Colors.midnightGray}
            style={{marginVertical: 15}}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  uploadTextAndIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    width: 250,
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#D1D1D6',
  },
  uploadedImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
  },
  uploadButtonText: {
    color: Colors.midnightGray,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default UploadButton;
