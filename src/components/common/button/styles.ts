import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 50,
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Nunito-Black',
  },
  buttonTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
  },
    icon: {
        marginRight: 10,
  },
});
