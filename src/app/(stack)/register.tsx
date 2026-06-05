import { ScrollView, View } from "react-native";
import BoxInput from "../../components/Boxinput";
import Button from "../../components/Button";

export default function Register() {
  return (

    <View className="flex-1 bg-[#F5F5F5]">

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
          <Button label="CRIAR CONTA" url="/" />
        </View>

      </ScrollView>
    </View>
  );
}