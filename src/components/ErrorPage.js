import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ErrorPage = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.errorMessage}>Something went wrong...</Text>
			<Feather name="frown" size={100} color="white" />
		</View>
	);
};

export default ErrorPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
	},
	errorMessage: {
		fontSize: 28,
		color: 'white',
		textAlign: 'center',
	},
});
