import createQuery, { createQueryQuery as createQueryQueryType } from "@/__generated__/createQueryQuery.graphql";
import DashboardHeader from "@/components/DashboardHeader";
import ProfileForm from "@/components/profile/ProfileForm";
import { getPreloadedQuery } from "@/relay/network";
import { getCookie } from "@/utils/getToken";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { graphql } from "relay-runtime";

const Profile = graphql`
  query createQueryQuery {
    profile {
      id
    }
  }
`;

type CreateProps = {
  queryRefs: {
    createQuery: PreloadedQuery<createQueryQueryType>
  }
}

export default function Create({ queryRefs }: CreateProps) {
  const router = useRouter()

  if (!queryRefs) {
    return (
      <div className="h-screen">
        <DashboardHeader hasArrow/>
        <div className="flex items-center mt-8 justify-center">
          <ProfileForm />
        </div>
      </div>
    )
  }

  const data = usePreloadedQuery(Profile, queryRefs.createQuery);
  const { profile } = data;
  useEffect(() => {
    if (profile) {
      router.push("/");
    }
  }, [profile, router]);
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
  
  try {
    const preloadedQueries = {
      createQuery: await getPreloadedQuery(createQuery, {}, token),
    };

    const profile = preloadedQueries.createQuery;
    console.log(profile);
    if (!profile) {
      return {
        props: {},
      };
    }

    return {
      props: {
        preloadedQueries,
      },
    };
  } catch (error) {
    console.error("Erro ao carregar o perfil:", error);
    return {
      props: {}, 
    };
  }
};
