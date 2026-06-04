import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import icons from "../../constants/icons";

export default function Funcoes() {
  const router = useRouter();

  
  const materiais = [
    {
      id: "1",
      titulo: "Introdução ao tema",
      paginas: "5 páginas",
      descricao: "Material introdutório em PDF",
    },
    {
      id: "2",
      titulo: "Conceito fundamentais",
      paginas: "12 páginas",
      descricao: "Material completo em PDF",
    },
    {
      id: "3",
      titulo: "Exercícios Práticos",
      paginas: "12 páginas",
      descricao: "Lista de exercícios-Gabarito",
    },
  ];

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      
      <View className="bg-[#5B33D4] pt-14 pb-8 px-6 flex-row items-center justify-center relative shadow-md">
        <TouchableOpacity 
          onPress={() => router.back()} 
          className="absolute left-6 top-16 z-10"
        >
          <Image 
            source={icons.seta} 
            className="w-6 h-6" 
            resizeMode="contain" 
          />
        </TouchableOpacity>

        
        <Text className="text-white text-2xl font-bold text-center tracking-wide">
          <Text className="italic font-serif text-3xl">f x</Text> - CINEMÁTICA
        </Text>
      </View>

      
      <ScrollView 
        className="flex-1 px-6 pt-10"
        showsVerticalScrollIndicator={false}
      >
        {materiais.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.7}
            onPress={() => console.log(`Abrir material: ${item.titulo}`)}
            className="bg-[#F2F2F2] rounded-none p-5 mb-6 flex-row items-center shadow-sm"
          >
            
            <View className="bg-white p-3 rounded-none border border-gray-300 mr-5 justify-center items-center">
              <Ionicons name="bookmark" size={28} color="#4B5563" />
            </View>

            
            <View className="flex-1 items-center justify-center pr-2">
              <Text className="text-gray-800 text-base font-bold text-center">
                {item.titulo}
              </Text>
              <Text className="text-gray-600 text-sm font-semibold text-center my-0.5">
                {item.paginas}
              </Text>
              <Text className="text-gray-500 text-xs text-center">
                {item.descricao}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}