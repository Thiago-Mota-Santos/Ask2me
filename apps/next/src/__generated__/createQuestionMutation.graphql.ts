/**
 * @generated SignedSource<<3983c7cc5a770134274fb4533fbfa648>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type createQuestionMutation$variables = {
  page: string;
  profileId: string;
  text: string;
};
export type createQuestionMutation$data = {
  readonly questionCreateMutation: {
    readonly questionEdge: {
      readonly node: {
        readonly id: string;
        readonly text: string | null | undefined;
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type createQuestionMutation = {
  response: createQuestionMutation$data;
  variables: createQuestionMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "profileId"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "text"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "page",
            "variableName": "page"
          },
          {
            "kind": "Variable",
            "name": "profileId",
            "variableName": "profileId"
          },
          {
            "kind": "Variable",
            "name": "text",
            "variableName": "text"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "QuestionCreateMutationPayload",
    "kind": "LinkedField",
    "name": "questionCreateMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "QuestionEdge",
        "kind": "LinkedField",
        "name": "questionEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Question",
            "kind": "LinkedField",
            "name": "node",
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
                "name": "text",
                "storageKey": null
              }
            ],
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
    "name": "createQuestionMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "createQuestionMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "0cb0f3257f112a45273d1c1f73de7486",
    "id": null,
    "metadata": {},
    "name": "createQuestionMutation",
    "operationKind": "mutation",
    "text": "mutation createQuestionMutation(\n  $text: String!\n  $profileId: String!\n  $page: String!\n) {\n  questionCreateMutation(input: {text: $text, profileId: $profileId, page: $page}) {\n    questionEdge {\n      node {\n        id\n        text\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0f9505036ce6e73d120e212973ea4744";

export default node;
