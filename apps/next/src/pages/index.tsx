import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { GetServerSideProps } from 'next';
import ProfileInfo from "@/components/ProfileInfo";
import { getCookie } from "@/utils/getToken";
import pageQuery, { pagesQuery as pageQueryType } from "@/__generated__/pagesQuery.graphql";
import { getPreloadedQuery } from "@/relay/network";
import { NextPageWithLayout } from '../relay/ReactRelayContainer'
import DashboardHeader from "@/components/DashboardHeader";
import Questionlist from "@/components/QuestionList";
import { Card } from "@repo/ui/card";

type HomeProps = {
  queryRefs: {
    pageQuery: PreloadedQuery<pageQueryType>
  }
}

const Profile = graphql`
  query pagesQuery {
    # ...ProfileInfo_profile
    ...QuestionList
  } 
`;

const Home: NextPageWithLayout<HomeProps> = ({ queryRefs }) => {
  const data = usePreloadedQuery<pageQueryType>(Profile, queryRefs.pageQuery);

  if (!data) {
    return null
  }

  return (
    <div className="h-screen">
      <DashboardHeader hasArrow />
      <div className="flex items-center mt-8 justify-center">
        <Card className="w-[800px] bg-gray-100">
          {/* <ProfileInfo profile={data} /> */}
          <Questionlist questions={data} /> 
        </Card>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie(ctx.req.headers);

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/auth/register',
      },
      props: {},
    };
  }

  const profile = await getPreloadedQuery(pageQuery, {}, token)
  // TODO: ever profile doesn't exist, profile return data, how to make this redirect correctly?
  if(!profile){
    return {
      redirect: {
        permanent: false,
        destination: '/create'
      },
      props: {}
    }
  }

  return {
    props: {
      preloadedQueries: {
        pageQuery: profile
      },
    },
  };
};

export default Home;
