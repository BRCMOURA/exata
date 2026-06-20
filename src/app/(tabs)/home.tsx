import { useRouter } from "expo-router";
import { Platform, Pressable, Text, View } from "react-native";


export default function Home() {

    const router = useRouter();

    const handlePressMath = () => {

        Platform.OS === 'web' && (document.activeElement as HTMLElement)?.blur();

        router.navigate('/math');

    };

    const handlePressFisica = () => {

        Platform.OS === 'web' && (document.activeElement as HTMLElement)?.blur();

        router.navigate('/fisica');

    };

    return (

        <View className="flex-1 justify-center gap-16 mx-8">
            <Pressable
                onPress={handlePressMath}
                className="active:opacity-70 bg-[#E91E63] p-6 rounded-2xl shadow-sm">
                <Text className="text-white text-2xl font-bold mb-2">
                    Matemática
                </Text>
                <Text className="text-white text-base font-medium leading-6 text-justify">
                    Funções, Equações e mais...
                </Text>
            </Pressable>

            <Pressable
                onPress={handlePressFisica}
                className="active:opacity-70 bg-[#22716C] p-6 rounded-2xl shadow-sm">
                <Text className="text-white text-2xl font-bold mb-2">
                    Física
                </Text>
                <Text className="text-white text-base font-medium leading-6 text-justify">
                    Mecânica, Eletricidade e mais...
                </Text>
            </Pressable>
        </View>
    );
}