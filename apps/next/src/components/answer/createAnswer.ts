import { graphql } from "react-relay";

const createAnswerMutation = graphql`
  mutation createAnswerMutation($profileId: String!, $answer: String!) {
  answerRegisterMutation(input: { profileId: $profileId, answer: $answer }) {
    questionEdge {
      cursor
      node {
        id
        text
        answer
      }
    }
  }
}

`;

export { createAnswerMutation }



