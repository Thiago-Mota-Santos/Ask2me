import { QuestionDetails_question$key } from "@/__generated__/QuestionDetails_question.graphql";
import { QuestionListPaginationQuery } from "@/__generated__/QuestionListPaginationQuery.graphql";
import { Button } from "@repo/ui/button";
import { Box, Text } from "@repo/ui/index";
import Link from "next/link";
import { useCallback } from "react";
import { graphql, usePaginationFragment } from "react-relay";

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
    <Box className="flex w-full flex-col">
      {data?.questions.edges?.map(edge => (
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
      ))}
      <Button onClick={loadMore} disabled={!hasNext} className="bg-orange-500 mt-4 text-white w-full p-3 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"> 
          Carregar mais...
      </Button>
    </Box>
  );
}
