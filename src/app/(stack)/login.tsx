import BoxInput from "@/src/components/Boxinput";
import Button from "@/src/components/Button";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from "react-native";

export default function Login() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    if (Platform.OS === 'web') {
      (document.activeElement as HTMLElement)?.blur();
    }
    router.navigate('/register');
  };

  function ProcessarLogin() {

    Keyboard.dismiss();

    if (!email.trim() || !password.trim()) {
      const titulo = "E-mail ou senha vazios";
      const mensagem = "Por favor, preencha o e-mail e a senha para continuar.";

      if (Platform.OS === 'web') {
        window.alert(`${titulo}: ${mensagem}`);
      } else {
        Alert.alert(titulo, mensagem, [{ text: "OK" }]);
      }

      return;
    }

    router.navigate('/home');

  }

  return (

    <KeyboardAvoidingView
      behavior="padding"
      className="flex-1 bg-[#F5F5F5]"
      keyboardVerticalOffset={64}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="px-8 pt-10"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        <Text className="text-[#5B33D4] text-xl font-bold text-center mb-12">
          Acesse sua conta
        </Text>


        <View className="w-full mb-10">
          <BoxInput
            label="E-mail"
            placeholder="Digite seu melhor e-mail"
            onChangeText={setEmail}
            value={email}
          />
          <View className="mt-4">
            <BoxInput
              label="Senha"
              placeholder="Digite uma senha segura"
              isPassword
              onChangeText={setPassword}
              value={password}
            />
          </View>
        </View>


        <View className="w-full mb-8">
          <Button
            label="ACESSAR"
            funcao={ProcessarLogin}
          />
        </View>

        <Pressable
          onPress={handlePress}
          className="active:opacity-70 items-center mb-36">
          <Text className="text-[#5B33D4] text-lg font-semibold">
            Criar minha conta
          </Text>
        </Pressable>

      </ScrollView>

    </KeyboardAvoidingView>
  );
}