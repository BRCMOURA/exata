import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import icons from "@/src/constants/icons";


export default function About() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#F5F5F5]">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      
      
      <View className="bg-[#5B33D4] pt-12 pb-6 px-6 items-center shadow-md">
        <TouchableOpacity 
          onPress={() => router.back()} 
          className="absolute left-6 top-14 z-10">
            <Image source={icons.seta}
            className="w-10 h-10"
            resizeMode="contain" />
        </TouchableOpacity>

        <Image 
          source={icons.logo2} 
          resizeMode="contain" 
          className="w-32 h-20"/>
      </View>

      <ScrollView 
        className="flex-1"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingHorizontal: 24,
          paddingBottom: 40
        }}
        showsVerticalScrollIndicator={false}
      >
        
        
        <View className="bg-[#E84D8A] p-6 rounded-3xl mb-16 shadow-sm">
          <Text className="text-black text-lg font-bold mb-2">
            Professora Lorrayne Teles Santos
          </Text>
          <Text className="text-black text-base font-medium leading-6 text-justify">
            Licenciada em Matemática (UNIFAN), especialista em Projetos de Tempo Integral (FAVENI), especialista em Robótica aplicada em Matemática (UFCAT).
          </Text>
        </View>

        
        <View className="bg-[#4ECDC4] p-6 rounded-3xl shadow-sm">
          <Text className="text-black text-lg font-bold mb-2">
            Professor Bruno Rafael Camilo de Moura
          </Text>
          <Text className="text-black text-base font-medium leading-6 text-justify">
            Licenciado em Física (UFG), especialista em Matemática e Física (FAVENI), especialista em Robótica aplicada em Matemática (UFCAT).
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}