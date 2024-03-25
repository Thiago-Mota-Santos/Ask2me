import { graphql } from "react-relay";

const createQuestionMutation = graphql`
  mutation createQuestionMutation($text: String!, $profileId: String!, $page: String!) {
  questionCreateMutation(input: { text: $text, profileId: $profileId, page: $page }) {
    questionEdge {
      node {
        id
        text
      }
    }
  }
}
`;

export { createQuestionMutation }



