import {View, Text, Image, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import React from 'react';
import Colors from '../../../constants/Colors';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native-gesture-handler';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const CARD_WIDTH = SCREEN_WIDTH < 768 ? 300 : SCREEN_WIDTH - 200;
const CARD_HEIGHT = SCREEN_WIDTH < 768 ? 151 : 250;

function InvoiceListComponent() {
  const isRTL = false;
  const {t} = useTranslation();

  return (
    <View
      style={[
        styles.facturesScreenContainer,
        {
          height: SCREEN_HEIGHT - CARD_HEIGHT - 200,
          width: SCREEN_WIDTH,
        },
      ]}>
      <View style={styles.spacer} />
      <Text
        style={[
          styles.descriptionText,
          {
            textAlign: isRTL ? 'right' : 'left',
            width: '100%',
            paddingHorizontal: 16,
          },
        ]}>
        {t('chooseInvoice')}
      </Text>
      <View style={{height: 2}} />
      <ScrollView style={{flex: 1, width: SCREEN_WIDTH}}>
        <InvoiceItem
          imageSource={require('../../../assets/images/burger_king.png')}
          title="Burger King"
          description="Lorem ipsum"
          itemCount={5}
          priceWhole={172}
          priceDecimal="00"
        />

        <InvoiceItem
          imageSource={require('../../../assets/images/virgin.png')}
          title="Virgin"
          description="Lorem ipsum"
          itemCount={4}
          priceWhole={299}
          priceDecimal="00"
        />

        {/* <InvoiceItem
        imageSource={require('../../../assets/images/img1.jpg')}
        title="Burger King"
        description="Lorem ipsum"
        itemCount={5}
        priceWhole={172}
        priceDecimal="00"
        isProfilePicture={true}
      /> */}

        <InvoiceItem
          imageSource={require('../../../assets/images/img5.jpg')}
          title="Jon Doe"
          description="Lorem ipsum"
          itemCount={4}
          priceWhole={299}
          priceDecimal="00"
          isProfilePicture={true}
        />

        <InvoiceItem
          imageSource={require('../../../assets/images/img4.jpg')}
          title="Burger King"
          description="Lorem ipsum"
          itemCount={5}
          priceWhole={172}
          priceDecimal="00"
          isProfilePicture={true}
        />
      </ScrollView>
    </View>
  );
}

export default InvoiceListComponent;

function InvoiceItem({
  imageSource,
  title,
  description,
  itemCount,
  priceWhole,
  priceDecimal,
  isProfilePicture = false,
}: {
  imageSource: any;
  title: string;
  description: string;
  itemCount: number;
  priceWhole: number;
  priceDecimal: String;
  isProfilePicture?: boolean;
}) {
  // const {isRTL} = useLayout();
  const isRTL = false;
  return (
    <View
      style={[
        styles.factureContainer,
        {
          flexDirection: isRTL ? 'row-reverse' : 'row',
        },
      ]}>
      <View style={styles.factureImageContainer}>
        <Image
          source={imageSource}
          style={[
            styles.factureImage,
            {
              width: isProfilePicture ? '100%' : '80%',
              height: isProfilePicture ? '100%' : '80%',
            },
          ]}
        />
      </View>
      <View
        style={[
          styles.factureTextBox,
          {
            alignItems: isRTL ? 'flex-end' : 'flex-start',
          },
        ]}>
        <Text style={styles.factureTitle}>{title}</Text>
        <View style={{height: 3}} />
        <Text style={styles.factureDescription}>{description}</Text>
      </View>
      <View
        style={[
          styles.facturePriceBox,
          {
            alignItems: isRTL ? 'flex-start' : 'flex-end',
          },
        ]}>
        <View style={styles.facturePriceRow}>
          <Text style={styles.factureItemCount}>{itemCount}</Text>
          <Ionicons name="cart" size={18} color={Colors.gray} />
        </View>
        <View style={styles.facturePriceRow}>
          <Text style={styles.facturePriceWhole}>{priceWhole}</Text>
          <Text style={styles.facturePriceDecimal}>.{priceDecimal} DH</Text>
        </View>
      </View>
    </View>
  );
}
