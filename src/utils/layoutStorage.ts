import AsyncStorage from '@react-native-async-storage/async-storage';

const LAYOUT_STORAGE_KEY = 'isRTL';
const LANGUAGE_STORAGE_KEY = 'language';

export const storeIsRTL = async (isRTL: boolean) => {
  await AsyncStorage.setItem(LAYOUT_STORAGE_KEY, JSON.stringify(isRTL));
};

export const fetchIsRTL = async () => {
  const storedIsRTL = await AsyncStorage.getItem(LAYOUT_STORAGE_KEY);
  return storedIsRTL !== null ? JSON.parse(storedIsRTL) : null;
};

export const storeLanguage = async (language: string) => {
  await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, language);
};

export const fetchLanguage = async () => {
  return 'fr';
  // const storedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
  // return storedLanguage !== null ? storedLanguage : 'fr';
}
