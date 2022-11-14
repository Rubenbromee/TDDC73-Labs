import React from 'react';
import {} from 'react-native';
import {TextInput} from 'react-native-paper';

type Props = {
    label: string;
    value: string;
    setValue:
        | React.Dispatch<React.SetStateAction<string | undefined>>
        | ((arg0: string) => void);
    width: number;
    topMargin: number;
    onFocusFunction?: () => void;
};

export const TextInputField: React.FC<Props> = ({
    label,
    value,
    setValue,
    width,
    topMargin,
    onFocusFunction,
}) => {
    return (
        <TextInput
            label={label}
            value={value}
            mode="outlined"
            outlineStyle={{borderRadius: 2, borderColor: '#b7dffd'}}
            style={{
                backgroundColor: 'white',
                marginTop: topMargin,
                marginBottom: 10,
                width: width,
                marginHorizontal: 0,
                padding: 0,
            }}
            onChangeText={text => {
                setValue(text);
            }}
            onFocus={() => onFocusFunction && onFocusFunction()}
        />
    );
};
