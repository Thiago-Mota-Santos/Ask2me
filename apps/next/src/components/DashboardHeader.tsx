import { Box, Flex } from "@repo/ui/index";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AvatarMenuBar from "./AvatarMenubar";

interface HeaderProps {
  hasArrow?: boolean;
}

export default function DashboardHeader({ hasArrow = false }: HeaderProps) {
  const router = useRouter();

  return (
    <Box className="flex items-center bg-white p-2 mr-2 justify-between">
      <button
        onClick={() => router.push('/')}
        className="ml-8 hidden md:block hover:pointer"
      >
        {hasArrow ? <ArrowLeft /> : null}
      </button>

      <div className="ml-0 mb-4 border-b-yellow-500 border-b-4 border-solid md:ml-24">
        <Link href="/dashboard">
          <Image
            className="align-middle mb-1"
            src="/asktome.png"
            width={50}
            height={60}
            alt="ask logo"
          />
        </Link>
      </div>
 
      <Flex gap="1" ml="3" align="start">
        <AvatarMenuBar />
      </Flex>
    </Box>
  );
}
