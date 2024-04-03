import { graphql } from "react-relay";

type QrCodeRegisterMutationType = {
    readonly profileEdge: {
        readonly node: {
            readonly correlationID: string;
            readonly identifier: string;
            readonly image: string | null | undefined;
            readonly name: string;
            readonly value: number;
            readonly brCode: string;
        } | null | undefined;
    } | null | undefined;
}

const createQrCodeMutation = graphql`
  mutation createQrCodeMutation($name: String!, $value: Int!) {
    QrCodeRegisterMutation(input: {name: $name, value: $value}) {
    profileEdge {
      node {
        name
        identifier
        correlationID
        value
        image
        brcode
      }
    }
  }
}
`;

export { createQrCodeMutation }
export type { QrCodeRegisterMutationType }
