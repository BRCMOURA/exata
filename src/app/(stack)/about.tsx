import { ScrollView, Text, View } from "react-native";


export default function About() {
  return (
    <View className="flex-1 bg-[#F5F5F5]">
      
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
          <Text className="text-white text-lg font-bold mb-2">
            Professora Lorrayne Teles Santos
          </Text>
          <Text className="text-white text-base font-medium leading-6 text-justify">
            Licenciada em Matemática (UNIFAN), especialista em Projetos de Tempo Integral (FAVENI), especialista em Robótica aplicada em Matemática (UFCAT).
          </Text>
        </View>

        
        <View className="bg-[#4ECDC4] p-6 rounded-3xl shadow-sm">
          <Text className="text-white text-lg font-bold mb-2">
            Professor Bruno Rafael Camilo de Moura
          </Text>
          <Text className="text-white text-base font-medium leading-6 text-justify">
            Licenciado em Física (UFG), especialista em Matemática e Física (FAVENI), especialista em Robótica aplicada em Matemática (UFCAT).
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}