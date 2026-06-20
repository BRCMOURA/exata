import { Platform, Text, View } from "react-native";

export default function About() {

  Platform.OS === 'web' && (document.activeElement as HTMLElement)?.blur();

  return (
    <View className="flex-1 justify-center bg-[#F5F5F5] mx-8">

      <View className="bg-[#E91E63] p-6 rounded-2xl mb-16 shadow-sm">
        <Text className="text-white text-lg font-bold mb-2">
          Professora: Lorrayne Teles Santos
        </Text>
        <Text className="text-white text-base font-medium leading-6 text-justify">
          Licenciada em Matemática (UNIFAN), especialista em Projetos de Tempo Integral (FAVENI), especialista em Robótica aplicada em Matemática (UFCAT).
        </Text>
      </View>

      <View className="bg-[#22716C] p-6 rounded-2xl shadow-sm">
        <Text className="text-white text-lg font-bold mb-2">
          Professor: Bruno Rafael Camilo de Moura
        </Text>
        <Text className="text-white text-base font-medium leading-6 text-justify">
          Licenciado em Física (UFG), especialista em Matemática e Física (FAVENI), especialista em Robótica aplicada em Matemática (UFCAT).
        </Text>
      </View>

    </View>
  );
}