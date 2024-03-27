import { CardContent } from "@repo/ui/card";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import QuestionDetails from "./QuestionDetails";
import { QuestionList$key } from "@/__generated__/QuestionList.graphql";

type QuestionListProps = {
    questions: QuestionList$key
}

const Question = graphql`
  fragment QuestionList on Query {
    ...QuestionDetails_question
  }
`;

export default function Questionlist({ questions }: QuestionListProps) {
    const query = useFragment(Question, questions);
    
    return (
      <CardContent className="flex flex-col overflow-y-auto max-h-[400px] mt-2 items-start justify-center gap-6">
        <QuestionDetails fragmentKey={query}/>
      </CardContent> 
    );
}