import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import icons from "../constants/icons";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 items-center bg-[#5B33D4] justify-between">

      <Image
        source={icons.logo2}
        style={{ width: 180, height: 180 }}
        resizeMode="contain"
      />

      <View className="w-full max-w-md my-auto justify-center">
        <Text className="text-2xl md:text-3xl font-bold text-white text-center leading-relaxed">
          Olá Estudante,{"\n"}Seja Bem Vindo!
        </Text>
      </View>

      <View className="px-8 w-full max-w-md pb-10">
        <Button label="INICIAR ESTUDOS" url="/login" />
        <Pressable
          onPress={() => router.navigate('/about')}
          className="active:opacity-70 py-5">
          <Text className="text-xl font-normal text-white text-center">
            Nossos Professores
          </Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}