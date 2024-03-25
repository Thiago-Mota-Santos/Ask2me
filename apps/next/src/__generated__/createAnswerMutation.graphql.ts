/**
 * @generated SignedSource<<f19607218e23045d9803a2ea8e01b7e6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type createAnswerMutation$variables = {
  answer: string;
  profileId: string;
};
export type createAnswerMutation$data = {
  readonly answerRegisterMutation: {
    readonly questionEdge: {
      readonly cursor: string;
      readonly node: {
        readonly answer: string | null | undefined;
        readonly id: string;
        readonly text: string;
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type createAnswerMutation = {
  response: createAnswerMutation$data;
  variables: createAnswerMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "answer"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "profileId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "answer",
            "variableName": "answer"
          },
          {
            "kind": "Variable",
            "name": "profileId",
            "variableName": "profileId"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "AnswerRegisterMutationPayload",
    "kind": "LinkedField",
    "name": "answerRegisterMutation",
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
            "kind": "ScalarField",
            "name": "cursor",
            "storageKey": null
          },
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "answer",
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createAnswerMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "createAnswerMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "e09223ab8b338af3c8860878eb2a1bf8",
    "id": null,
    "metadata": {},
    "name": "createAnswerMutation",
    "operationKind": "mutation",
    "text": "mutation createAnswerMutation(\n  $profileId: String!\n  $answer: String!\n) {\n  answerRegisterMutation(input: {profileId: $profileId, answer: $answer}) {\n    questionEdge {\n      cursor\n      node {\n        id\n        text\n        answer\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cefe064cf92dd5273f94c77ec170c7b2";

export default node;
