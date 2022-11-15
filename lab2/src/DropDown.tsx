import {useState} from 'react';
import DropDownPicker, {
    DropDownPickerProps,
    ItemType,
    ValueType,
} from 'react-native-dropdown-picker';

type Props = {
    listItems: {label: string; value: string}[];
    valueSetter: React.Dispatch<React.SetStateAction<string>>;
    placeHolder: string;
};

export const DropDown: React.FC<Props> = ({
    listItems,
    valueSetter,
    placeHolder,
}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(listItems);

    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder={placeHolder}
            style={{
                borderRadius: 3,
                borderColor: '#b7dffd',
                width: 100,
                marginTop: 10,
                marginBottom: 10,
                marginHorizontal: 0,
                padding: 0,
            }}
            dropDownContainerStyle={{borderRadius: 3, borderColor: '#b7dffd'}}
            onChangeValue={val => {
                valueSetter(val!);
            }}
        />
    );
};
