import { Button } from "@repo/ui/button";
import { Card, CardContent, CardFooter } from "@repo/ui/card";
import { Avatar, Box, Separator, Text } from "@repo/ui/index";
import Image from "next/image";
import Link from "next/link";
import { graphql, useFragment } from "react-relay";
import { ProfileInfo_profile$key } from "../__generated__/ProfileInfo_profile.graphql";
import { useRouter } from "next/navigation";

export default function ProfileInfo({ profile }: { profile: ProfileInfo_profile$key }) {
    const router = useRouter()
    const data = useFragment(
    graphql`
      fragment ProfileInfo_profile on Profile {
        page
        pixKey
        description
        socialMedia {
          instagram
          whatsapp
          linkedin
          X
          twitch
          youtube
        }
      }
    `,
    profile,
  );

  const renderSocialMediaIcons = () => {
    const socialMediaIcons = [];

    for (const [socialNetwork, link] of Object.entries(data.socialMedia!)) {
      if (link && link.trim() !== '') {
        const iconSrc = `/social/${socialNetwork}.svg`;
        socialMediaIcons.push(
          <Link key={socialNetwork} target="_blank" href={link} className="rounded-full p-2 hover:bg-gray-200">
            <Image
              src={iconSrc}
              alt={`Icone da rede social ${socialNetwork}`}
              width={32}
              height={32}
            />
          </Link>
        );
      }
    }

    return socialMediaIcons;
  };

  return (
    <Box className="flex items-center justify-center">
      <Card className="w-[800px] bg-gray-100">
        <Box className="flex items-center justify-between ml-4">
          <Box className="flex items-center">
            <Avatar
              className="mt-8"
              width={80}
              height={80}
              radius="full"
              fallback="D"
              size="8"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FProfile-Avatar-PNG.png&f=1&nofb=1&ipt=72628782de083ad2a23e36b3cf2a00927726d0c58b0715cc3cc7203360b66be9&ipo=images"
            />
            <Box className="ml-4 flex flex-col justify-center">
              <Text size="7" weight="bold">guest</Text>
              <Button onClick={() => router.push(data.page)} className="px-4 py-2 rounded-full text-white bg-orange-500 hover:bg-orange-600">Faça sua pergunta</Button>
            </Box>
          </Box>
          <Box className="flex mr-16 items-center">
            {renderSocialMediaIcons()}
          </Box>
        </Box>
        <Box className="space-y-2">
          <Box className="flex items-center flex-row mt-8 gap-x-4 px-6">
            <Text size="6" className="text-gray-800" weight="bold">Perguntas</Text>
            <Separator size="4"/>
          </Box>
        </Box>
        <CardContent className="flex flex-col mt-10 items-center justify-center gap-6">
          {/* TODO: list  */}
          <Box className="flex flex-col gap-y-1">
            <Link href="#">
              <Text className="hover:underline">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aperiam praesentium unde placeat aspernatur neque voluptatem corporis! Fugit animi, nostrum commodi, placeat, velit a labore ad laudantium corrupti numquam perferendis!</Text>
            </Link>
            <Link className="text-gray-500 hover:underline hover:text-orange-500" href="#">Ver resposta</Link>
          </Box>
        </CardContent>
        <CardFooter>
          {/* TODO: add more itens */}
          <Button className="bg-orange-500 text-white w-full p-3 hover:bg-orange-600">
            Carregar mais...
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
}
