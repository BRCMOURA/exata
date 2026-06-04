import { Image, TouchableOpacity, View, ScrollView } from "react-native";
import { useRouter, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import icons from "../../constants/icons"; 
import BoxInput from "../../components/Boxinput"; 
import Button from "../../components/Button"; 

export default function Register() {
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
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 32 }} 
        className="px-8 pt-6"
        showsVerticalScrollIndicator={false}
      >
        
        
        <View className="w-full">
          <BoxInput 
            label="Nome Completo" 
            placeholder="Digite seu nome completo" 
          />
          
          <BoxInput 
            label="E-mail" 
            placeholder="Digite seu melhor e-mail" 
          />
          
          <BoxInput 
            label="WhatsApp" 
            placeholder="(00) 00000-0000" 
          />
          
          <BoxInput 
            label="Senha" 
            placeholder="Digite uma senha segura" 
            isPassword 
          />
          
          <BoxInput 
            label="Confirme a senha" 
            placeholder="Digite a senha novamente" 
            isPassword 
          />
        </View>

        
        <View className="w-full mt-6">
          <Button label="CRIAR CONTA" url="/login" />
        </View>

      </ScrollView>
    </View>
  );
}