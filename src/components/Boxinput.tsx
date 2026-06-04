import { Text, TextInput, View } from "react-native";

interface BoxInputProps {
    label?: string
    placeholder: string
    isPassword?: boolean
}

export default function BoxInput(props: BoxInputProps) {
    return (
        <View className="w-full mb-4">
            <Text className="text-gray-700 text-base font-semibold mb-2">{props.label}</Text>
            <TextInput className="w-full bg-white border border-gray-300 p-4 rounded-xl text-base shadow-sm text-black"
            placeholder={props.placeholder}
            placeholderTextColor="#9CA3AF"
            secureTextEntry={props.isPassword} />
        </View>
    );
}