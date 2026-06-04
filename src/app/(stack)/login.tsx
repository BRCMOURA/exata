import BoxInput from "@/src/components/Boxinput";
import Button from "@/src/components/Button";
import icons from "@/src/constants/icons";
import { StatusBar } from "expo-status-bar";
import { useRouter, Stack } from "expo-router";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";

export default function Login() {

    const router = useRouter();

    return (
        
    <View className="flex-1 bg-[#F5F5F5]">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      
      <View className="bg-[#5B33D4] pt-12 pb-6 px-6 items-center shadow-md">
        <TouchableOpacity 
          onPress={() => router.back()} 
          className="absolute left-6 top-14 z-10"
        >
          <Image 
            source={icons.seta} 
            className="w-6 h-6" 
            resizeMode="contain" 
          />
        </TouchableOpacity>

        <Image 
          source={icons.logo2} 
          resizeMode="contain" 
          className="w-32 h-20" 
        />
      </View>

      
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }} 
        className="px-8 pt-10"
        showsVerticalScrollIndicator={false}
      >
        
        <Text className="text-[#5B33D4] text-xl font-bold text-center mb-12">
          Acesse sua conta
        </Text>

        
        <View className="w-full mb-10">
          <BoxInput 
            label="E-mail" 
            placeholder="Digite seu melhor e-mail" 
          />
          <View className="mt-4">
            <BoxInput 
              label="Senha" 
              placeholder="Digite uma senha segura" 
              isPassword 
            />
          </View>
        </View>

        
        <View className="w-full mb-8">
          <Button label="ACESSAR" url="/(tabs)" />
        </View>

        
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text className="text-[#5B33D4] text-lg font-semibold text-center mb-10">
            Criar minha conta
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}