import { Box, Text } from "@repo/ui/index";
import Image from "next/image"
import Link from "next/link"

export default function NotFoundPage (){
  return (
    <Box className="flex min-h-screen flex-col text-center justify-center items-center gap-4">
      <Text className="text text-black">Essa página ainda não existe.</Text>
      <Text className="text text-black">
        Crie um cartão com esse nome agora
      </Text>
      <Image
        src={"/error.svg"}
        alt="imagem erro"
        width={300}
        height={300}
        priority
      />

      <Link href={"/"}>
        <Box className="rounded-full bg-orange-600 py-2 md:px-4 px-2 text-white">
          <Text>Crie seu cartão para receber perguntas</Text>
        </Box>
      </Link>
    </Box>
  )
}