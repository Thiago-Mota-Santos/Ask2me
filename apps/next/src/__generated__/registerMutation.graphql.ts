/**
 * @generated SignedSource<<94468300172bdad563ea451d272449f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type registerMutation$variables = {
  email: string;
  password: string;
  username: string;
};
export type registerMutation$data = {
  readonly userRegisterMutation: {
    readonly me: {
      readonly id: string;
      readonly username: string;
    } | null | undefined;
    readonly token: string | null | undefined;
  } | null | undefined;
};
export type registerMutation = {
  response: registerMutation$data;
  variables: registerMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "username"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email"
          },
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password"
          },
          {
            "kind": "Variable",
            "name": "username",
            "variableName": "username"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UserRegisterPayload",
    "kind": "LinkedField",
    "name": "userRegisterMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "registerMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "registerMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "6de7ba297c6901e328fada6726ebd7a0",
    "id": null,
    "metadata": {},
    "name": "registerMutation",
    "operationKind": "mutation",
    "text": "mutation registerMutation(\n  $username: String!\n  $email: String!\n  $password: String!\n) {\n  userRegisterMutation(input: {username: $username, password: $password, email: $email}) {\n    token\n    me {\n      id\n      username\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "660a2b7ef533689ee9e7944b2b8d5a0c";

export default node;
