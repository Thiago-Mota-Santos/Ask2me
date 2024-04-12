/**
 * @generated SignedSource<<3ffba97776cbf8f48ee1a65978ba9972>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserSignOutMutationInput = {
  clientMutationId?: string | null | undefined;
};
export type signOutMutation$variables = {
  input: UserSignOutMutationInput;
};
export type signOutMutation$data = {
  readonly UserSignOutMutation: {
    readonly error: string | null | undefined;
    readonly success: string | null | undefined;
  } | null | undefined;
};
export type signOutMutation = {
  response: signOutMutation$data;
  variables: signOutMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UserSignOutMutationPayload",
    "kind": "LinkedField",
    "name": "UserSignOutMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "signOutMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "signOutMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5bdf90fc9b82449f43184d8433115fff",
    "id": null,
    "metadata": {},
    "name": "signOutMutation",
    "operationKind": "mutation",
    "text": "mutation signOutMutation(\n  $input: UserSignOutMutationInput!\n) {\n  UserSignOutMutation(input: $input) {\n    success\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "980b90097d6d45a3c57dcd50981d4e27";

export default node;
