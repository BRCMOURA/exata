import { Text, View, ScrollView } from "react-native";


export default function Home() {
    return (
       
            <View className="flex-1 pr-4">
                <Text className="text-white text-lg font-bold mb-1">
                    Olá Estudante,
                </Text>
                    <Text className="text-white/95 text-sm font-medium">
                        Escolha uma disciplina abaixo:
                    </Text>
           
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
                        Matemática
                    </Text>
                        <Text className="text-white text-base font-medium leading-6 text-justify">
                             Funções, Equações e mais...
                        </Text>
                </View>

        
                    <View className="bg-[#4ECDC4] p-6 rounded-3xl shadow-sm">
                        <Text className="text-white text-lg font-bold mb-2">
                            Física
                        </Text>
                            <Text className="text-white text-base font-medium leading-6 text-justify">
                                Mecânica, Eletricidade e mais...
                            </Text>
                    </View>
            </ScrollView>
         </View>
    );
}