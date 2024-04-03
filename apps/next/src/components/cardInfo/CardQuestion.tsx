import { fiatFormat } from "@/utils/fiatFormat";
import { Button } from "@repo/ui/button";
import { Card, CardContent } from "@repo/ui/card";
import { Avatar, Text, Box, toast } from "@repo/ui/index";
import { Skeleton } from "@repo/ui/skeleton"
import { Copy } from "lucide-react";
import Image from "next/image"  
import { QrCodeRegisterMutationType } from "./createQrCode";

export default function CardQuestion (qrcodeDetails : any) {

  const value = qrcodeDetails?.profileEdge?.profileEdge?.node?.value
  const imageUrl = qrcodeDetails?.profileEdge?.profileEdge?.node?.image
  const brcode = qrcodeDetails?.profileEdge?.profileEdge?.node?.brCode

  //   todo: if error render error message

  const handleCopy = () => {
    if (brcode) {
      navigator.clipboard.writeText(brcode);
      toast("Código QRCode copiado com sucesso!");
    }
  }

  if(!value) {
    return <Skeleton className="w-[400px] h-[400px]" />
  }

  return (
    <Box className="h-screen flex items-center justify-center">
        <Card className="w-[400px] bg-gray-100">
          <Box className="flex items-center justify-center">
            <Avatar
              width={80}
              height={80}
              radius="full"
              fallback="D"
              size="8"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FProfile-Avatar-PNG.png&f=1&nofb=1&ipt=72628782de083ad2a23e36b3cf2a00927726d0c58b0715cc3cc7203360b66be9&ipo=images"
            />
          </Box>
          <Box className="space-y-2">
            <Box className="flex flex-row justify-center items-center px-6">
              <Text color="gray" weight="bold">test</Text>
            </Box>
          </Box>
          <Box className="space-y-2">
              <Box className="flex flex-row justify-between items-center px-6">
                <Text color="gray">Data</Text>
                <Text color="gray">
                  {new Date().toLocaleDateString('pt-BR')}
                </Text>
              </Box>
              <Box className="flex flex-row space-y-0 justify-between items-center px-6">
                <Text className="font-bold">Total</Text>
                <Text className="font-bold" size="6">
                  {`R$${fiatFormat(value!)}`}
                </Text>
              </Box>
              <Box className="p-2">
               <Text as="p" weight="bold" align="center">Abra o app do seu banco, escaneie a imagem ou cole o código QR Code</Text>
              </Box>
            </Box>
            <CardContent className="flex flex-col mt-4 items-center justify-center gap-6">
              <Box className="border-4 border-orange-600">
                <Image
                  src={imageUrl!}
                  alt="qr code pix"
                  width={200}
                  height={200}
                />
              </Box>
             <Button onClick={handleCopy} className="bg-orange-500 gap-x-2 text-white hover:bg-orange-600">
                <Copy/>
                <Text>COPIAR CÓDIGO QRCODE</Text>
             </Button>
            </CardContent>
        </Card>
      </Box>
    )
}