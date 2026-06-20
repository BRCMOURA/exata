import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import icons from "@/src/constants/icons";

export default function Fisica() {
  const router = useRouter();

  return (
    
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ 
          flexGrow: 1, 
          justifyContent: 'center',
          paddingHorizontal: 24,
          paddingBottom: 24 
        }}
        showsVerticalScrollIndicator={false}
      >
        
        {/* Card 1: Introdução à Física / Cinemática */}
        <TouchableOpacity 
          activeOpacity={0.8}
          // Navega para a tela interna de cinemática/introdução se houver na stack
          onPress={() => router.push("/cinematica" as any)} 
          className="bg-[#ffff] p-6 rounded-2xl mb-8 shadow-md flex-row items-center justify-between"
        >
              {/* Ícone de cinemática importado do seu arquivo de assets */}
          <Image 
            source={icons.globo} 
            className="w-12 h-12 opacity-90" 
            resizeMode="contain" 
          />

          <View className="flex-1 pr-2">
            <Text className="text-black text-xl font-bold mb-1">
              Cinemática
            </Text>
          </View>
          
        </TouchableOpacity>

        {/* Card 2: Eletricidade */}
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => router.push("/eletricidade" as any)} 
          className="bg-[#ffff] p-6 rounded-2xl shadow-md flex-row items-center justify-between" 
        >
                {/* Ícone térmico correspondente importado do seu arquivo de assets */}
          <Image 
            source={icons.eletric} 
            className="w-12 h-12 opacity-90" 
            resizeMode="contain" 
          />

          <View className="flex-1 pr-2">
            <Text className="text-black text-xl font-bold mb-1">
              Eletricidade
            </Text>
          </View>

        </TouchableOpacity>

         {/* Card 3: Termodinâmica */}
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => router.push("/termodinamica" as any)} 
          className="bg-[#ffff] p-6 rounded-2xl shadow-md flex-row items-center justify-between" 
        >
             {/* Ícone térmico correspondente importado do seu arquivo de assets */}
          <Image 
            source={icons.thermic} 
            className="w-12 h-12 opacity-90" 
            resizeMode="contain" 
          />

          <View className="flex-1 pr-2">
            <Text className="text-black text-xl font-bold mb-1">
              Termodinâmica
            </Text>
          </View>

        </TouchableOpacity>

         {/* Card 4: Óptica */}
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => router.push("/optica" as any)} 
          className="bg-[#ffff] p-6 rounded-2xl shadow-md flex-row items-center justify-between" 
        >
                 {/* Ícone térmico correspondente importado do seu arquivo de assets */}
          <Image 
            source={icons.ligth} 
            className="w-12 h-12 opacity-90" 
            resizeMode="contain" 
          />
          
          <View className="flex-1 pr-2">
            <Text className="text-black text-xl font-bold mb-1">
              Óptica
            </Text>
          </View>

        </TouchableOpacity>

      </ScrollView>
    
  );
}