
import React, { ReactNode } from 'react';
import { PreloadedQuery, graphql, usePreloadedQuery } from 'react-relay';
import { rootLayoutQuery as rootLayoutQueryType } from '@/__generated__/rootLayoutQuery.graphql';
import DashboardHeader from '@/components/DashboardHeader';
import { Card } from '@repo/ui/card';
import Questionlist from '@/components/QuestionList';


type RootProps = {
    queryRef: PreloadedQuery<rootLayoutQueryType>;
    children: ReactNode
};

const Questions = graphql`
  query rootLayoutQuery {
    questions {
     ...QuestionList_question
  }
}
`;

export default function RootLayout({ queryRef, children }: RootProps)  {
  const data = usePreloadedQuery<rootLayoutQueryType>(Questions, queryRef);

  const { questions } = data
  if(!questions) return null

  return (
    <div className="h-screen">
       <DashboardHeader  hasArrow/>
     <div className="flex items-center mt-8 justify-center">
     <Card className="w-[800px] bg-gray-100">
        {children}  
        <Questionlist questions={questions} />
     </Card>
     </div>
     </div>
  );
};


