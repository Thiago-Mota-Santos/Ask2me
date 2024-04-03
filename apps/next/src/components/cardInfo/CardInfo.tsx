import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "@repo/ui/button";
import { Card, CardContent, CardFooter } from "@repo/ui/card";
import { Avatar, Textarea, Text, Box, Form, toast, Separator } from "@repo/ui/index";
import { graphql, useFragment, useMutation } from "react-relay";
import { usePathname } from "next/navigation";
import { CardInfo_card$key } from "@/__generated__/CardInfo_card.graphql";
import { createQuestionMutation } from './createQuestion';
import { createQuestionMutation$data } from '@/__generated__/createQuestionMutation.graphql';
import { useRouter } from 'next/navigation';
import NotFoundPage from '../notFoundPage';
import { Input } from '@repo/ui/input';
import { fiatFormat } from '@/utils/fiatFormat';
import { ChangeEvent, useState } from 'react';
import CardQuestion from './CardQuestion';
import { QrCodeRegisterMutationType, createQrCodeMutation } from './createQrCode';
import { createQrCodeMutation$data } from '@/__generated__/createQrCodeMutation.graphql';


const questionSchema = yup.object({
  text: yup.string().required('Required').trim(),
});

const resolver = yupResolver(questionSchema);

type FormValues = yup.InferType<typeof questionSchema>;

export default function CardInfo({ profiles }: { profiles: CardInfo_card$key }) {
  const router = useRouter()
  const { register, handleSubmit } = useForm<FormValues>({
    resolver,
  });

  const [request] = useMutation(createQuestionMutation)
  const [qrcodeRequest] = useMutation(createQrCodeMutation)

  const data = useFragment(
    graphql`
      fragment CardInfo_card on ProfileConnection {
          edges {
            node {
              page
              id
            }
          }
      }
    `,
    profiles,
  );

    const path = usePathname()
    // todo: this state will be used when payment via pix is enabled
    const [sliderValue, setSliderValue] = useState(0.10);
    const [currentPage, setCurrentPage] = useState(1)
    const [qrcodeDetails, setQrcodeDetails] = useState<QrCodeRegisterMutationType | null | undefined>()

    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = parseFloat(e.target.value);
      setSliderValue(newValue);
    }

    const isPathInProfile = data?.edges?.some(edge => edge?.node?.page === path);
    const profileInfo = data?.edges?.filter(edge => edge?.node?.page === path);
    const profileId = profileInfo?.map(item => item?.node?.id)[0];
     

    if (!isPathInProfile) {
      return <NotFoundPage />;
    }
  
    function onSubmit({ text }: FormValues) {
      
      request({
        variables: {
          page: path,
          text,
          profileId
        },
        onError() {
          toast.error("Algo deu errado :(", {
            description: "Tente novamente"
        })
        },
        onCompleted(response: {} | null) {
          const { questionCreateMutation } = response as createQuestionMutation$data;
          const questionId = questionCreateMutation?.questionEdge?.node?.id
          
          toast(`Pergunta enviada com sucesso`)
          router.push(`/${path}/${questionId}`) 
        },
      });
    }
    
    const handleGenerateQrCode = () => {
      setCurrentPage(prev => prev + 1)
      qrcodeRequest({
        variables: {
          name: `qr code ${Math.random()}`,
          // 0.1 * 10 = 1 cents
          value: sliderValue * 10
        },
        onError() {
          toast.error("Algo deu errado :(", {
            description: "Tente novamente"
        })
        },
        onCompleted(response: {} | null) {
          const { QrCodeRegisterMutation } = response as createQrCodeMutation$data;
          setQrcodeDetails(QrCodeRegisterMutation)
        },
        
      });
    }

    return (
      <>
        {currentPage === 1 
         ?
         <Box className="h-screen flex items-center justify-center">
        <Card className="w-[400px] bg-gray-100">
        <Form onSubmit={handleSubmit(onSubmit)}>
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
              <Text color="gray" weight="bold">{path.slice(1)}</Text>
            </Box>
          </Box>
          <CardContent className="flex flex-col mt-10 items-center justify-center gap-6">
            <Box className="w-full gap-1 flex flex-col items-center justify-center">
              <Text weight="bold" className="text-gray-600">{`R$ ${fiatFormat(sliderValue)}`}</Text> *
              <Separator color="crimson" mb="2" size="2" />
               <Input onChange={handleSliderChange} type="range" className="w-8/12 appearance-none bg-orange-500 h-1 rounded outline-none" min="0.10" max="1000"/>
            </Box>
            <Text size="5" weight="bold">Faça alguma pergunta!</Text>
            <Textarea
              rows={5}
              maxLength={300}
              className="bg-gray-50 resize-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
              placeholder="Escreva uma mensagem"
              {...register('text')}
            />
          </CardContent>
        </Form>
          <CardFooter>
            <Button onClick={handleGenerateQrCode} className="bg-orange-500 w-full p-3 hover:bg-orange-600">
              Perguntar
            </Button>
          </CardFooter>
        </Card>
      </Box>
         : 
          <CardQuestion profileEdge={qrcodeDetails} /> 
        }
      
      </>
    );
  }