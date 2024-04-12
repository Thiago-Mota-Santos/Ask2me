import { graphql } from "relay-runtime";

const SignOut = graphql`
  mutation signOutMutation($input: UserSignOutMutationInput!) {
    UserSignOutMutation(input: $input) {
      success
      error
    }
  }
`

export { SignOut };
  