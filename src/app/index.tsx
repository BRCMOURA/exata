import { Image,Text, TouchableOpacity, View } from "react-native";
import icons from "../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-[#5B33D4]">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <SafeAreaView className="flex-1">
        <View className="flex-1 items-center justify-between px-6 pt-12 pb-2">
          <Image source={icons.logo2} resizeMode="contain" className="w-72 h-72" />
          <Text className="text-2xl font-bold text-white text-center">
            Olá Estudante, {"\n"}Seja Bem Vindo!
          </Text>
            <View className="w-full px-4 mb-14">
              <TouchableOpacity activeOpacity={0.8} 
                onPress={() => router.navigate('/login')} 
                className="bg-[#E91E63] py-4 rounded-2xl items-center shadow-md">
               <Text className="text-white text-lg font-bold uppercase">
                 Iniciar Estudos
               </Text>
               </TouchableOpacity>
                <View className="w-full px-4">
                  <TouchableOpacity onPress={() => router.navigate('/about')} 
                    className="py-4 mb-2">
                    <Text className="text-lg font-normal text-white text-center">
                      Nossos Professores
                    </Text>
                  </TouchableOpacity>
                </View>
            </View>
        </View>
      </SafeAreaView>
    </View>
  );
}