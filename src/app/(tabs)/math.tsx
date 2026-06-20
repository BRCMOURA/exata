import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useRouter, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import icons from "@/src/constants/icons";

export default function Math() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#F5F5F5]">
      {/* Remove o cabeçalho padrão para usar o cabeçalho roxo que configuramos no _layout */}
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      {/* Grid de Rolagem dos Conteúdos de Matemática */}
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ 
          flexGrow: 1, 
          justifyContent: 'center', // Centraliza verticalmente igual ao design do app
          paddingHorizontal: 24,
          paddingBottom: 24 
        }}
        showsVerticalScrollIndicator={false}
      >
        
        {/* Card 1: Funções */}
        <TouchableOpacity 
          activeOpacity={0.8}
          // Redireciona para a tela funcoes.tsx que criamos dentro da pasta (stack)
          onPress={() => router.push("/funcoes")} 
          className="bg-[#E91E63] p-6 rounded-2xl mb-8 shadow-md flex-row items-center justify-between"
        >
          <View className="flex-1 pr-2">
            <Text className="text-white text-xl font-bold mb-1">
              Funções
            </Text>
          </View>
          
          {/* Ícone ilustrativo da função importado do seu arquivo de assets */}
          <Image 
            source={icons.func} 
            className="w-12 h-12 opacity-90" 
            resizeMode="contain" 
          />
        </TouchableOpacity>

        {/* Card 2: Equações */}
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => router.push("/equacoes" as any)} 
          className="bg-[#E91E63] p-6 rounded-2xl shadow-md flex-row items-center justify-between" 
        >
          <View className="flex-1 pr-2">
            <Text className="text-white text-xl font-bold mb-1">
              Equações
            </Text>
          </View>

          {/* Ícone ilustrativo de geometria importado do seu arquivo de assets */}
          <Image 
            source={icons.integral} 
            className="w-12 h-12 opacity-90" 
            resizeMode="contain" 
          />
        </TouchableOpacity>

         {/* Card 3: Geometria */}
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => router.push("/geometria" as any)} 
          className="bg-[#E91E63] p-6 rounded-2xl shadow-md flex-row items-center justify-between" 
        >
          <View className="flex-1 pr-2">
            <Text className="text-white text-xl font-bold mb-1">
              Geometria
            </Text>
          </View>

          {/* Ícone ilustrativo de geometria importado do seu arquivo de assets */}
          <Image 
            source={icons.geometric} 
            className="w-12 h-12 opacity-90" 
            resizeMode="contain" 
          />
        </TouchableOpacity>

        {/* Card 4: Trigonometria */}
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => router.push("/trigonometria" as any)} 
          className="bg-[#E91E63] p-6 rounded-2xl shadow-md flex-row items-center justify-between" 
        >
          <View className="flex-1 pr-2">
            <Text className="text-white text-xl font-bold mb-1">
              Trigonometria
            </Text>
          </View>

          {/* Ícone ilustrativo de geometria importado do seu arquivo de assets */}
          <Image 
            source={icons.cos} 
            className="w-12 h-12 opacity-90" 
            resizeMode="contain" 
          />
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}