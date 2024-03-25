import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import { 
    Avatar, 
    Flex, 
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
    Text 
} from '@repo/ui/index'
import { AuthContext } from '@/context/AuthContext'

export default function AvatarMenuBar() {
  const router = useRouter()
  const { signout } = AuthContext()
  const handleLogout = async () => {
    signout()
    router.push("/auth/login")
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
            </Flex>
          </Flex>
        </MenubarTrigger>
        <MenubarContent
          sideOffset={5}
          className="flex items-start justify-center z-10 flex-col bg-white min-w-[224px] p-4 border shadow-custom rounded-lg border-gray-200"
        > 
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
