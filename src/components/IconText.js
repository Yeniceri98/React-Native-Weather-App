import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconText = ({ iconName, iconColor, bodyText, bodyTextStyles }) => {
	return (
		<View style={styles.container}>
			<Feather name={iconName} size={50} color={iconColor} />
			<Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
		</View>
	);
};

export default IconText;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	textTheme: {
		fontWeight: 'bold',
	},
});

/*
  Expo Icons: https://docs.expo.dev/guides/icons/
*/
