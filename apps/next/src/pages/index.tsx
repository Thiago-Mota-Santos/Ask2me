import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { GetServerSideProps } from 'next';
import DashboardHeader from "@/components/DashboardHeader";
import ProfileInfo from "@/components/ProfileInfo";
import { getCookie } from "@/utils/getToken";
import { getPreloadedQuery } from "@/relay/network";
import pagesQuery, { pagesQuery as pageQueryType } from "@/__generated__/pagesQuery.graphql";

type HomeProps = {
  preloadedQuery: PreloadedQuery<pageQueryType>;
}

export default function Home({ preloadedQuery }: HomeProps) {
  const data = usePreloadedQuery(
    graphql`
      query pagesQuery {
        profile {
          ...ProfileInfo_profile
        }
      }
    `,
    preloadedQuery
  );

  const { profile } = data;

  return (
     <div className="h-screen bg-gray-100">
        <DashboardHeader hasArrow/>
        <div className="flex items-center mt-8 justify-center">
            <ProfileInfo profile={profile!} />
        
        {/* <ProfileForm/> */}
        </div>
     </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie(ctx.req.headers);
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/auth/signin',
      },
      props: {},
    };
  }

  return {
    props: {
      preloadedQueries: {
        pageQuery: await getPreloadedQuery(pagesQuery, {}, token),
      },
    },
  }
};