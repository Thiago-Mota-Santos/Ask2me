import { QuestionDetails_question$key } from "@/__generated__/QuestionDetails_question.graphql";
import { QuestionListPaginationQuery } from "@/__generated__/QuestionListPaginationQuery.graphql";
import { Button } from "@repo/ui/button";
import { Box, Separator, Text } from "@repo/ui/index";
import Link from "next/link";
import { useCallback } from "react";
import { graphql, usePaginationFragment } from "react-relay";
import Image from "next/image"

type QuestionDetails = {
  fragmentKey: QuestionDetails_question$key;
};

const QuestionListFragment = graphql`
  fragment QuestionDetails_question on Query
  @argumentDefinitions(first: { type: Int, defaultValue: 5 }, after: { type: String })
  @refetchable(queryName: "QuestionListPaginationQuery") {
    questions(first: $first, after: $after)
    @connection(key: "QuestionList_questions", filters: []) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          page
          text 
          answer
          id
        }
      }
    }
  }
`;

export default function QuestionDetails ({ fragmentKey }: QuestionDetails) {
  const { data, isLoadingNext, loadNext, hasNext } = usePaginationFragment<QuestionListPaginationQuery, QuestionDetails_question$key>(
    QuestionListFragment,
    fragmentKey,
  );
  
  const loadMore = useCallback(() => {
    if (!isLoadingNext && hasNext) {
      loadNext(5);
    }
  }, [hasNext, isLoadingNext, loadNext]);

  return (
    <Box className="flex w-full flex-col space-y-1">
      <Box className="flex items-center flex-row mt-2 mb-4">
          <Text size="6" className="text-gray-800" weight="bold">Perguntas</Text>
          <Separator size="4" />
        </Box>
      {data?.questions.edges?.map(edge => (
        <>
        <div className="flex flex-col" key={edge?.node?.id}>
            <Link target="_blank" href={`${edge?.node?.page}/${edge?.node?.id}`}>
              <Text weight="bold" className="hover:underline">
                {edge?.node?.text}
              </Text>
            </Link>
            {edge?.node?.answer ?
              <Link target="_blank" className="text-gray-500 hover:underline hover:text-orange-500" href={`${edge?.node?.page}/${edge?.node?.id}`}>
                Ver resposta
              </Link> :
              <Link target="_blank" className="text-gray-500 hover:underline hover:text-orange-500" href={`${edge?.node?.page}/${edge?.node?.id}`}>
                Responder
              </Link>}
          </div>
        </>
      ))}
      {!data?.questions.edges || data.questions.edges.length === 0 ? (
        <Box className="flex items-center justify-center flex-col"> 
          <Text weight="bold">Compartilhe seu link para receber sua primeira pergunta</Text>
          <Image
            src={"/ask.gif"}
            className="rounded"
            alt="Icone mulher pensando"
            width={200}
            height={200}
            priority
          />
        </Box>
      ) : (
        <Button onClick={loadMore} disabled={!hasNext} className="bg-orange-500 mt-4 text-white w-full p-3 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed">
          Carregar mais...
        </Button>
      )}
    </Box>
  );
}
