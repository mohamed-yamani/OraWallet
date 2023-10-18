import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    formInputWrapper: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        backgroundColor: Colors.white,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D1D1D6',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 22,
        height: 48,
        marginTop: 10,
        backgroundColor: Colors.white,
    },
    title: {
        color: Colors.midnightGray,
        fontSize: 22,
        fontFamily: 'Nunito-Bold',
        marginHorizontal: 20,
    },
    headerText: {
        fontSize: 16,
        fontFamily: 'Nunito-Regular',
        color: Colors.midnightGray,
        marginTop: 35,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    input: {
        marginLeft: 10,
        height: 40,
    },
    divider: {
        height: '100%',
        width: 1,
        backgroundColor: 'gray',
        marginHorizontal: 10,
    },
    flagContainer: {
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4,
    },
    flagStyle: {
        height: 25,
        width: 40,
        borderRadius: 5,
    },
    scrollView: {
        paddingVertical: 10,
        paddingRight: 10,
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
