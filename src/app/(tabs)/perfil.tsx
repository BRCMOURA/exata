import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5, FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function Perfil() {
  const router = useRouter();

  // Função para lidar com o logout (desconectar)
  const handleLogout = () => {
    // Retorna para a tela inicial de autenticação/login limpa
    router.replace("/");
  };

  return (
    <ScrollView 
      className="flex-1 bg-[#F5F5F5]"
      contentContainerStyle={{ 
        flexGrow: 1, 
        justifyContent: 'center', // Distribui os itens centralizados verticalmente como na imagem
        paddingHorizontal: 32,
        paddingBottom: 24
      }}
      showsVerticalScrollIndicator={false}
    >
      
      {/* Opção 1: Minhas Aulas */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => console.log("Navegar para Minhas Aulas")}
        className="w-full flex-row items-center py-6 border-b border-gray-200/60"
      >
        <View className="mr-5 items-center justify-center w-10">
          <FontAwesome5 name="book-open" size={28} color="#5A6275" />
        </View>
        <View className="flex-1">
          <Text className="text-[#3A4150] text-lg font-bold">
            Minhas Aulas
          </Text>
          <Text className="text-[#8A94A6] text-sm font-medium mt-0.5">
            Aulas acessadas no aplicativo
          </Text>
        </View>
        <MaterialIcons name="chevron-right" size={26} color="#B0BAC9" />
      </TouchableOpacity>

      {/* Espaçamento generoso entre as opções como na imagem image_79641d.png */}
      <View className="h-10" />

      {/* Opção 2: Meus Dados */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => console.log("Navegar para Meus Dados")}
        className="w-full flex-row items-center py-6 border-b border-gray-200/60"
      >
        <View className="mr-5 items-center justify-center w-10">
          <FontAwesome name="user" size={32} color="#5A6275" />
        </View>
        <View className="flex-1">
          <Text className="text-[#3A4150] text-lg font-bold">
            Meus dados
          </Text>
          <Text className="text-[#8A94A6] text-sm font-medium mt-0.5">
            Informações da minha conta
          </Text>
        </View>
        <MaterialIcons name="chevron-right" size={26} color="#B0BAC9" />
      </TouchableOpacity>

      <View className="h-10" />

      {/* Opção 3: Desconectar */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleLogout}
        className="w-full flex-row items-center py-6 border-b border-gray-200/60"
      >
        <View className="mr-5 items-center justify-center w-10">
          <FontAwesome name="lock" size={32} color="#5A6275" />
        </View>
        <View className="flex-1">
          <Text className="text-[#3A4150] text-lg font-bold">
            Desconectar
          </Text>
          <Text className="text-[#8A94A6] text-sm font-medium mt-0.5">
            Desconectar usuário deste aparelho
          </Text>
        </View>
        <MaterialIcons name="chevron-right" size={26} color="#B0BAC9" />
      </TouchableOpacity>

    </ScrollView>
  );
}