import QuestionsPageQuery, { QuestionPageQuery } from "@/__generated__/QuestionPageQuery.graphql";
import AnswerCard from "@/components/answer/AnswerCard";
import { getPreloadedQuery } from "@/relay/network";
import { getCookie } from "@/utils/getToken";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { graphql } from "relay-runtime";

const dev = process.env.NODE_ENV !== 'production'

const url = dev ? 'http://localhost:3000' : 'https://ask2me-next.vercel.app'

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
  const path = usePathname()
  const profileId = path.split('/')[2]
  const data = usePreloadedQuery(CardQuery, queryRefs.questionQuery);
  
  const { question } = data;
  if(!question) return 
  
  return (
    <>
    <Head>
      <title>Recebi uma pergunta: </title>
      <meta property="og:title" content="Pergunta" />
      <meta property="og:description" content="Faça uma pergunta você também" />
      <meta property="og:image" content={`${url}/api/og`} />
      <meta property="og:url" content={`${url}${path}`} />
    </Head>
    <AnswerCard question={question} />
  </>
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