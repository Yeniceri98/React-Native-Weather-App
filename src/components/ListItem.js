import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import moment from 'moment';

import { weatherType } from '../utilities/weatherType';

const ListItem = ({ dt_txt, min, max, condition }) => {
	return (
		<View style={styles.item}>
			{/* <Feather name="sun" size={50} color="white" /> */}
			<Feather name={weatherType[condition].icon} size={50} color="white" />
			<View style={styles.dataTextWrapper}>
				<Text style={styles.date}>{moment(dt_txt).format('dddd')}</Text>
				<Text style={styles.date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
			</View>
			<Text style={styles.temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
		</View>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	item: {
		flex: 1,
		flexDirection: 'row',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'plum',
	},
	temp: {
		color: 'white',
		fontSize: 20,
	},
	date: {
		color: 'white',
		fontSize: 15,
	},
	dataTextWrapper: {
		flexDirection: 'column',
	},
});
