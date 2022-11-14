import React from 'react';
import { } from 'react-native';
import { TextInput } from 'react-native-paper';

type Props = {
	label: string;
	valueSetter: React.Dispatch<React.SetStateAction<string | undefined>>;
	width: number,
	topMargin: number,
	onFocusFunction?: React.Dispatch<React.SetStateAction<boolean>>,
};

export const TextInputField: React.FC<Props> = ({ label, valueSetter, width, topMargin, onFocusFunction }) => {
	return (
		<TextInput
			label={label}
			mode="outlined"
			outlineStyle={{ borderRadius: 2, borderColor: '#b7dffd' }}
			style={{ backgroundColor: 'white', marginTop: topMargin, marginBottom: 10, width: width, marginHorizontal: 0, padding: 0 }}
			onChangeText={(text) => { valueSetter(text) }}
			onFocus={onFocusFunction ? () => { onFocusFunction(true) } : () => { }}
			onBlur={onFocusFunction ? () => { onFocusFunction(false) } : () => { }}
		/>
	);
};
