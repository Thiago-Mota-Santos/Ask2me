import { ProfileInfo_profile$key } from "@/__generated__/ProfileInfo_profile.graphql";
import { fiatFormat } from "@/utils/fiatFormat";
import { Button } from "@repo/ui/button";
import { Card, CardContent, CardFooter } from "@repo/ui/card";
import { Avatar, Separator, Textarea, Text, Box } from "@repo/ui/index";
import { Input } from "@repo/ui/input";
import { ChangeEvent, useState } from "react";
import { graphql, useFragment } from "react-relay";
import { usePathname } from "next/navigation";
import { CardInfo_card$key } from "@/__generated__/CardInfo_card.graphql";

export default function CardInfo({ profiles }: { profiles: CardInfo_card$key }) {

  const data = useFragment(
    graphql`
      fragment CardInfo_card on ProfileConnection {
          edges {
            node {
              page
            }
          }
      }
    `,
    profiles,
  );

    const path = usePathname()
    const [sliderValue, setSliderValue] = useState(0.10);
    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = parseFloat(e.target.value);
      setSliderValue(newValue);
    }
  

    const isPathInProfile = data?.edges?.some(edge => edge?.node?.page === path);

    if (!isPathInProfile) {
      return <div>Erro: Página inválida</div>;
    }
  

    return (
      <Box className="h-screen bg-gray-200 flex items-center justify-center">
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
              <Text color="gray" weight="bold">Thiago</Text>
            </Box>
          </Box>
          <CardContent className="flex flex-col mt-10 items-center justify-center gap-6">
            <Box className="w-full gap-1 flex flex-col items-center justify-center">
              <Text weight="bold" className="text-gray-600">{`R$ ${fiatFormat(sliderValue)}`}</Text>
              <Separator color="crimson" mb="2" size="2" />
              <Input onChange={handleSliderChange} type="range" className="w-8/12 appearance-none bg-orange-500 h-1 rounded outline-none" min="0.10" max="1000"/>
            </Box>
            <Text size="5" weight="bold">Faça alguma pergunta!</Text>
            <Textarea
              rows={5}
              maxLength={300}
              className="bg-gray-50 resize-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
              placeholder="Escreva uma mensagem"
            />
          </CardContent>
          <CardFooter>
            <Button className="bg-orange-500 w-full p-3 hover:bg-orange-600">
              Perguntar
            </Button>
          </CardFooter>
        </Card>
      </Box>
    );
  }