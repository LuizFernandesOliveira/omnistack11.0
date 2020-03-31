import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1, //toma todo o espaço da tela
        paddingHorizontal: 24, //espao horizontal
        paddingTop: Constants.statusBarHeight + 20, //pega a altura do status e por no padding top
    },
    header:  {
        flexDirection: 'row', //coloca os textos um do lado do outro
        justifyContent: 'space-between', //poe o texto pra direita
        alignItems: 'center', //centraliza
    },
    headerText: {
        fontSize: 15,
        color: '#737380',
    },
    headerTextBold: {
        fontWeight: 'bold'//negrito,
    },
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },
    incidentList: {
        marginTop: 32,
    },
    incident: {
        padding: 24,
        borderRadius: 8, //borda arredondada
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },
    detailButton: {
        flexDirection: 'row', //flecha do lado direito
        justifyContent: 'space-between',// organiza os espaos
        alignItems: 'center',
    },
    detailButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold',
    }
});