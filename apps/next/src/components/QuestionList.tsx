import { QuestionList_question$key } from "@/__generated__/QuestionList_question.graphql";
import { Button } from "@repo/ui/button";
import { CardContent, CardFooter } from "@repo/ui/card";
import { Box, Text } from "@repo/ui/index";
import { data } from "autoprefixer";
import Link from "next/link"
import { useFragment, usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";


export default function Questionlist({ questions }: { questions: QuestionList_question$key }) {


    // const { data, loadNext, hasNext } = usePaginationFragment(
    //     graphql`
    //       fragment QuestionList_question on Query
    //       @argumentDefinitions(first: { type: Int, defaultValue: 1 }, after: { type: String })
    //       @refetchable(queryName: "QuestionListPaginationQuery") {
    //         questions(first: $first, after: $after)
    //         @connection(key: "QuestionList_questions") {
    //           edges {
    //             node {
    //               page
    //               text 
    //               answer
    //               id
    //             }
    //           }
    //         }
    //       }
    //     `,
    //     questions,
    //   )

    const data = useFragment(
        graphql`
          fragment QuestionList_question on QuestionConnection {
            edges {
                node {
                    page
                    text 
                    answer
                    id
                }
            }
          }
        `,
        questions,
);


    return (
        <>
        <CardContent className="flex flex-col overflow-y-auto max-h-[400px] mt-10 items-start justify-center gap-6">
            <Box className="flex flex-col gap-y-1">
            {data?.edges?.map(edge => (
                <>
                 <Link target="_blank" href={`${edge?.node?.page}/${edge?.node?.id}`}>
                 <Text className="hover:underline">
                     {edge?.node?.text}
                 </Text>
                </Link>
             {edge?.node?.answer ? 
             <Link target="_blank" className="text-gray-500 hover:underline hover:text-orange-500" href={`${edge?.node?.page}/${edge?.node?.id}`}>
                 Ver resposta
             </Link>: 
             <Link target="_blank" className="text-gray-500 hover:underline hover:text-orange-500" href={`${edge?.node?.page}/${edge?.node?.id}`}>
             Responder
             </Link>
             }
              </>
            ))}
                </Box>
        </CardContent>
            <CardFooter>
                <Button className="bg-orange-500 text-white w-full p-3 hover:bg-orange-600"> 
                    Carregar mais...
                </Button>
            </CardFooter>
        </> 
    );
}