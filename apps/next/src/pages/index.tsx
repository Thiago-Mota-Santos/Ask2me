import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { GetServerSideProps } from 'next';
import ProfileInfo from "@/components/ProfileInfo";
import { getCookie } from "@/utils/getToken";
import pageQuery, { pagesQuery as pageQueryType } from "@/__generated__/pagesQuery.graphql";
import ProfileForm from "@/components/profile/ProfileForm";
import { getPreloadedQuery } from "@/relay/network";
import RootLayoutQuery,{ RootLayoutQuery as RootLayoutQueryType } from "@/__generated__/RootLayoutQuery.graphql";
import RootLayout from "@/layouts/RootLayout";
import { NextPageWithLayout } from '../relay/ReactRelayContainer'


type HomeProps = {
  queryRefs: {
    pageQuery: PreloadedQuery<pageQueryType>
    rootLayoutQuery: PreloadedQuery<RootLayoutQueryType>;
  }
}


const Profile = graphql`
  query pagesQuery {
    profile {
      ...ProfileInfo_profile
    }
  }

`;

const Home: NextPageWithLayout<HomeProps> = ({ queryRefs }) => {
  const data = usePreloadedQuery(Profile, queryRefs.pageQuery);
  const { profile } = data;

  return (
      <> 
        {profile ? <ProfileInfo profile={profile} /> : <ProfileForm />}
      </>
  );
}

Home.getLayout = page => {
  return <RootLayout queryRef={page.props.queryRefs.rootLayoutQuery}>{page}</RootLayout>;
};

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
 
  return {
    props: {
      preloadedQueries: {
        pageQuery: await getPreloadedQuery(pageQuery, {}, token),
        rootLayoutQuery: await getPreloadedQuery(RootLayoutQuery, {}, token),
      },
    },
  };
};

export default Home

