import React from 'react';
import { TextInput, View, Text, TextInputProps } from 'react-native';

interface InputTextProps extends TextInputProps {
  placeholder: string;
  caption?: string;
}

const InputText: React.FC<InputTextProps> = ({ placeholder, keyboardType = 'default', caption }) => {
  return (
    <View>
      {caption && <Text className="text-gray-500 text-sm">{caption}</Text>}
      <TextInput
        className="border border-gray-400 rounded p-2 mb-2"
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default InputText;
