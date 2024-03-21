import QuestionsPageQuery, { QuestionPageQuery } from "@/__generated__/QuestionPageQuery.graphql";
import AnswerCard from "@/components/answer/AnswerCard";
import { getPreloadedQuery } from "@/relay/network";
import { getCookie } from "@/utils/getToken";
import { GetServerSideProps } from "next";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { graphql } from "relay-runtime";


type UserCardProps = {
    queryRefs: {
      questionQuery: PreloadedQuery<QuestionPageQuery>
    }
}

const CardQuery = graphql`
  query QuestionPageQuery ($profileId: String!) {
    question (profileId: $profileId) {
     ...AnswerCard
  }
}
`;

export default function QuestionCard({ queryRefs }: UserCardProps) {
  
  const data = usePreloadedQuery(CardQuery, queryRefs.questionQuery);
  
  const { question } = data;

  if(!question) return 
  
  return (
    <AnswerCard question={question} />
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const token = getCookie(ctx.req.headers)!;
    
    const { question } = ctx.query
    
    return {
      props: {
        preloadedQueries: {
         questionQuery: await getPreloadedQuery(QuestionsPageQuery, { profileId: question }, token),
        },
      },
    };
  };