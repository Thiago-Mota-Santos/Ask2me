"use client"


import { PreloadedQuery, graphql, usePreloadedQuery } from "react-relay";
import { getPreloadedQuery } from "@/relay/network";
import { GetServerSideProps } from "next";
import { getCookie } from "@/utils/getToken";
import CardInfo from "@/components/CardInfo";
import NamespageQuery, { NamepageQuery } from "@/__generated__/NamepageQuery.graphql";


type UserCardProps = {
  queryRefs: {
    cardQuery: PreloadedQuery<NamepageQuery>
  }
}

const CardQuery = graphql`
  query NamepageQuery {
    profiles {
      ...CardInfo_card
  }
}
`;

export default function UserCard({ queryRefs }: UserCardProps) {
   const data = usePreloadedQuery(CardQuery, queryRefs.cardQuery);
  
   const { profiles } = data;
  
 return (
      
      <>
       {profiles ? <CardInfo profiles={profiles}/> : null}
      </>

    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie(ctx.req.headers)!;
  
  return {
    props: {
      preloadedQueries: {
        cardQuery: await getPreloadedQuery(NamespageQuery, {}, token),
      },
    },
  };
};