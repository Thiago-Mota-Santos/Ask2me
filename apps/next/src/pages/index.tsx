import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { GetServerSideProps } from 'next';
import ProfileInfo from "@/components/ProfileInfo";
import { getCookie } from "@/utils/getToken";
import pageQuery, { pagesQuery as pageQueryType } from "@/__generated__/pagesQuery.graphql";
import { getPreloadedQuery } from "@/relay/network";
import rootLayoutQuery, { rootLayoutQuery as rootLayoutQueryType } from "@/__generated__/rootLayoutQuery.graphql";
import { NextPageWithLayout } from '../relay/ReactRelayContainer'
import RootLayout from "@/layouts/rootLayout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type HomeProps = {
  queryRefs: {
    pageQuery: PreloadedQuery<pageQueryType>
    rootLayoutQuery: PreloadedQuery<rootLayoutQueryType>;
  }
}


const Profile = graphql`
  query pagesQuery {
    profile {
      ...ProfileInfo_profile
    }
    questions {
    ...QuestionList_question
  }
}
`;



const Home: NextPageWithLayout<HomeProps> = ({ queryRefs }) => {
  const router = useRouter()
  const data = usePreloadedQuery(Profile, queryRefs.pageQuery);
  const { profile } = data;
  // TODO: find best form to make this redirect

  // if(!profile){
    // router.push('/create')
  // }

  // https://nextjs.org/docs/messages/no-router-instance
  
  useEffect(() => {
    if(!profile){
      router.push("/create")
      return
    }
  },[])
  

  if(!profile) {
    return null
  }

  return (
     <ProfileInfo profile={profile} />
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
        rootLayoutQuery: await getPreloadedQuery(pageQuery, {}, token),
      },
    },
  };
};

export default Home

