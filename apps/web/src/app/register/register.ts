import { graphql } from "react-relay";

const RegisterMutation = graphql`
  mutation registerMutation(
    $username: String!
    $email: String!
    $password: String!
  ) {
    userRegisterMutation(
      input: { username: $username, password: $password, email: $email }
    ) {
      token
      me {
        id
        username
      }
    }
  }
`;

export { RegisterMutation };
