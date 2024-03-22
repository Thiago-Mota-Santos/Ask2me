
import React, { ReactNode } from 'react';
import { PreloadedQuery, graphql, usePreloadedQuery } from 'react-relay';
import { RootLayoutQuery as RootLayoutQueryType } from '@/__generated__/RootLayoutQuery.graphql';
import DashboardHeader from '@/components/DashboardHeader';
import { Card } from '@repo/ui/card';


type RootProps = {
    queryRef: PreloadedQuery<RootLayoutQueryType>;
    children: ReactNode
  };

const Questions = graphql`
  query RootLayoutQuery {
  questions {
    edges {
      node {
        ...QuestionList_question
      }
    }
  }
}
`;

export default function RootLayout({ queryRef, children }: RootProps)  {
  const data = usePreloadedQuery<RootLayoutQueryType>(Questions, queryRef);

  const { questions } = data;
  console.log(questions)


  return (
    <div className="h-screen bg-gray-100">
       <DashboardHeader hasArrow/>
     <div className="flex items-center mt-8 justify-center">
     <Card className="w-[800px] h-[400px] bg-gray-100">
        {children}  
        {/* <Questionlist /> */}
     </Card>
     </div>
    </div>
  );
};


