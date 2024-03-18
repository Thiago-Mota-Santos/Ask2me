'use client'

import { AvatarIcon, ArrowLeftIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import { logout } from '../utils/cookie'
import { 
    Avatar, 
    Flex, 
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
    Separator,
    Text 
} from '@repo/ui/index'

export default function AvatarMenuBar() {
  const router = useRouter()
  
  const handleLogout = async () => {
    await logout()
    router.push("/login")
  } 

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="py-1 transition-all">
          <Flex gap="1" ml="3">
            <Avatar
              width={40}
              height={40}
              radius="full"
              fallback="D"
              size="3"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FProfile-Avatar-PNG.png&f=1&nofb=1&ipt=72628782de083ad2a23e36b3cf2a00927726d0c58b0715cc3cc7203360b66be9&ipo=images"
            />
            <Flex
              align="start"
              direction="column"
              className="ml-1 hidden md:flex"
            >
              <Text size="2" className="hidden md:flex">
                thiago
              </Text>
              <Text className="hidden md:block" size="2" color="gray">
                Admin
              </Text>
            </Flex>
          </Flex>
        </MenubarTrigger>
        <MenubarContent
          sideOffset={5}
          className="flex items-start justify-center z-10 flex-col bg-white min-w-[224px] p-4 border shadow-custom rounded-lg border-gray-200"
        >
          <MenubarItem onClick={() => router.push('/profile')}>
            <Text
              as="span"
              weight="light"
              ml="3"
              size="5"
              className="flex items-center justify-center"
            >
              <AvatarIcon className="mr-1" fontSize={5} />
              <Text className="ml-1 hover:cursor-pointer">Profile</Text>
            </Text>
          </MenubarItem>
          <Separator size="4" className="h-[1px] bg-[#E2E8F0] m-1" />
          <MenubarItem onClick={handleLogout}>
            <Text
              as="span"
              weight="light"
              ml="3"
              size="5"
              className="flex items-center justify-center"
            >
              <ArrowLeftIcon className="mr-1" fontSize={5} />
              <Text className="ml-1 hover:cursor-pointer">Sign out</Text>
            </Text>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
