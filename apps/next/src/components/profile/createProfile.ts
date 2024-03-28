import { graphql } from "react-relay";

const ProfileMutation = graphql`
  mutation createProfileMutation(
    $page: String!,
    $pixKey: String!,
    $description: String!,
    $socialMedia: SocialMediaInput,
) {            
    profileRegisterMutation(input: {
    page: $page,
    pixKey: $pixKey,
    description: $description,
    socialMedia: $socialMedia
    }) {
    profileEdge {
        node {
        page
        pixKey
        description
        socialMedia {
            instagram
            X
            twitch
            youtube
        }
        }
     }
  }
}
`;

export { ProfileMutation }



