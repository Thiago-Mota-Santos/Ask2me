import { Button } from "@repo/ui/button";
import { Avatar, Box, Text, toast } from "@repo/ui/index";
import Image from "next/image";
import Link from "next/link";
import { graphql, useFragment } from "react-relay";
import { ProfileInfo_profile$key } from "../__generated__/ProfileInfo_profile.graphql";
import { useRouter } from "next/navigation";

export default function ProfileInfo({ profile }: { profile: ProfileInfo_profile$key }) {
    const router = useRouter()
    const data = useFragment(
    graphql`
      fragment ProfileInfo_profile on Query {
       profile {
        page
        socialMedia {
         instagram
         youtube
         X
         twitch
       }
    }
 
}
    `,
    profile,
  );
  const renderSocialMediaIcons = () => {
    const socialMediaIcons = [];
   
    for (const [socialNetwork, link] of Object.entries(data.profile?.socialMedia!)) {
      if (link && link.trim() !== '') {
        const iconSrc = `/social/${socialNetwork}.svg`;
        socialMediaIcons.push(
          <Link key={socialNetwork} target="_blank" href={`${link}`} className="rounded-full p-2 hover:bg-gray-200">
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
    <div className="w-[800px]">
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
              <Text size="7" weight="bold">{data.profile?.page.slice(1)}</Text>
              <Button onClick={() => router.push(data.profile?.page!)} className="px-4 py-2 rounded-full text-white bg-orange-500 hover:bg-orange-600">Faça sua pergunta</Button>
            </Box>
          </Box>
          <Box className="flex mr-16 items-center">
            {renderSocialMediaIcons()}
          </Box>
        </Box>
      </div>
  );
}
