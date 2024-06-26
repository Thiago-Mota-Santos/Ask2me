import * as yup from 'yup';
import { AnswerCard$key } from "@/__generated__/AnswerCard.graphql";
import { Button } from "@repo/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@repo/ui/card";
import { Avatar, Box, Form, Text, Textarea, toast } from "@repo/ui/index";
import { graphql, useFragment, useMutation } from "react-relay";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { createAnswerMutation } from './createAnswer';
import { useRouter } from "next/navigation"
import Link from 'next/link';

const questionSchema = yup.object({
    answer: yup.string().required('Required').trim(),
});
  
const resolver = yupResolver(questionSchema);
  
type FormValues = yup.InferType<typeof questionSchema>;

const AnswerCardFragment = graphql`
  fragment AnswerCard on Query {
    question(profileId: $profileId) {
      id
      text
      answer
      page
    }
    profile {
      id
      page
      pixKey
    }
  }
`;

export default function AnswerCard({ question }: { question: AnswerCard$key }) {
  const router = useRouter()
  const data = useFragment(AnswerCardFragment, question); 
  const { register, handleSubmit } = useForm<FormValues>({
    resolver,
  });

  const [request] = useMutation(createAnswerMutation);

  const isAuthenticated = data.profile != null;
  
  function onSubmit({ answer }: FormValues) {
    request({
      variables: {
        answer,
        profileId: data.question?.id
      },
      onError() {
        toast.error("Algo deu errado :(", {
            description: "Tente novamente"
        })
      },
      onCompleted() {
        toast(`Pergunta respondida!`)
      },
    });
  }
   
  return (
    <Box className="h-screen bg-white flex items-center justify-center">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card className="w-[400px] bg-gray-100">
          <Link href="/">
          <Box className="flex items-center justify-center hover:scale-105 transition-transform duration-300">
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
              <Text color="gray" weight="bold">{data?.question?.page?.slice(1)}</Text>
            </Box>
          </Box>
          </Link>
          <CardContent className="flex flex-col mt-10 items-center justify-center gap-6">
            <Box className="w-full rounded-lg gap-1 flex flex-col items-center justify-center">
              <Card className="flex flex-col items-center max-h-40 overflow-y-auto bg-gray-200">
                <CardTitle>
                    <Text color="orange" weight="bold" size="5">Pergunta</Text>
                </CardTitle>
                <CardContent>
                    <Text weight="bold">{data?.question?.text}</Text>
                </CardContent>
              </Card>
            </Box>
            
            {isAuthenticated && !data?.question?.answer && (
              <>
                <Text size="5" weight="bold">Escreva a sua resposta</Text> 
                <Textarea
                  rows={5}
                  maxLength={300}
                  className="bg-gray-50 resize-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
                  placeholder="Escreva uma resposta"
                  {...register('answer')}
                />
              </>
            )}
            
            {data?.question?.answer && (
              <Card className="flex flex-col items-center max-h-40 overflow-y-auto bg-gray-200">
                <CardTitle>
                    <Text color="orange" weight="bold" size="5">Resposta</Text>
                </CardTitle>
                <CardContent>
                    <Text weight="bold">{data?.question?.answer}</Text>
                </CardContent>
              </Card>
            )}
            
          </CardContent>
          <CardFooter>
            {isAuthenticated && !data?.question?.answer ? (
              <Button type='submit' className="bg-orange-500 w-full p-3 hover:bg-orange-600">
                responder
              </Button>
            ) : (
              <Button onClick={() => router.push('/')} className='bg-orange-500 w-full p-3 hover:bg-orange-600'>
                Voltar para o menu
              </Button>  
            )}
          </CardFooter>
        </Card>
      </Form>
    </Box>
  )
}
