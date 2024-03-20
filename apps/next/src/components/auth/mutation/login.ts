import { graphql } from "react-relay";

const LoginMutation = graphql`
  mutation loginMutation($email: String!, $password: String!) {
    userLoginMutation(input: { password: $password, email: $email }) {
      token
      me {
        id
        username
      }
    }
  }
`;

export { LoginMutation }