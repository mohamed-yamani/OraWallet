import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#333',
        fontWeight: 'bold',
    },

    mainContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    spacer: {
        height: 10
    },

    divider: {
        height: 10,
    },

    descriptionText: {
        color: Colors.midnightGray,
        fontSize: 16,
        fontWeight: '100',
        fontFamily: 'Nunito-Regular',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'left', width: '100%', paddingHorizontal: 16
    },

    optionContainer: {
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 8,
        marginTop: 10,
        padding: 10,
        justifyContent: 'flex-start',
        gap: 10
    },

    iconContainer: {
        height: 35,
        width: 35,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.2,
        backgroundColor: 'transparent',
        borderColor: '#AEAEB2'
    },

    optionText: {
        color: Colors.midnightGray,
        fontSize: 12,
        fontWeight: '100',
        fontFamily: 'Nunito-Black'
    },

    chevronContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },

    facturesScreenContainer: {
        flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white'
    },

    title: {
        color: 'black', fontSize: 12, marginTop: 10, marginBottom: 10, fontFamily: 'Nunito-Regular'
    },

    factureContainer: {
        alignItems: 'center',
        height: 72,
        backgroundColor: '#FAFAFA',
        borderRadius: 24,
        marginHorizontal: 15,
        marginTop: 12,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 12
    },

    factureImageContainer: {
        height: 48,
        width: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#AEAEB2',
        overflow: 'hidden'
    },

    factureImage: {
        height: 40,
        width: 40
    },

    factureTextBox: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1
    },

    factureTitle: {
        color: Colors.midnightGray,
        fontFamily: 'Nunito-Bold',
        fontSize: 16,
        fontWeight: 'bold',
    },

    factureDescription: {
        color: Colors.midnightGray,
        fontFamily: 'Nunito-Regular',
        fontSize: 12,
    },

    facturePriceBox: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },

    facturePriceRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    factureItemCount: {
        color: Colors.gray,
        fontSize: 12,
        fontWeight: 'bold',
        paddingRight: 3
    },

    facturePriceWhole: {
        color: Colors.midnightGray,
        fontSize: 16,
        fontFamily: 'Nunito-ExtraBold',
        paddingLeft: 2
    },

    facturePriceDecimal: {
        color: Colors.midnightGray,
        fontSize: 10,
        fontFamily: 'Nunito-ExtraBold',
        paddingRight: 3,
        marginBottom: 3,
    },

    scrollView: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        width: '100%'
    },

});

export default styles;