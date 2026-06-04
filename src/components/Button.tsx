import { Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface ButtonProps {
  label: string;
  url: string;
}

export default function Button({ label, url }: ButtonProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      // Usando replace para limpar o histórico de autenticação ao entrar na Home
      onPress={() => router.replace(url as any)}
      className="w-full bg-[#E91E63] py-4 rounded-2xl items-center shadow-md"
    >
      <Text className="text-white text-lg font-bold uppercase tracking-wider">
        {label}
      </Text>
    </TouchableOpacity>
  );
}