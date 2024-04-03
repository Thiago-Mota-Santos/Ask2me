/**
 * @generated SignedSource<<3981a0d50a2ba8410a2cbdf466095f43>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuestionPageQuery$variables = {
  profileId: string;
};
export type QuestionPageQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AnswerCard">;
};
export type QuestionPageQuery = {
  response: QuestionPageQuery$data;
  variables: QuestionPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "profileId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "page",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "QuestionPageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AnswerCard"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "QuestionPageQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "profileId",
            "variableName": "profileId"
          }
        ],
        "concreteType": "Question",
        "kind": "LinkedField",
        "name": "question",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Profile",
        "kind": "LinkedField",
        "name": "profile",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "pixKey",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3c5683a792e47bb48bccb693a31a7cf9",
    "id": null,
    "metadata": {},
    "name": "QuestionPageQuery",
    "operationKind": "query",
    "text": "query QuestionPageQuery(\n  $profileId: String!\n) {\n  ...AnswerCard\n}\n\nfragment AnswerCard on Query {\n  question(profileId: $profileId) {\n    id\n    text\n    answer\n    page\n  }\n  profile {\n    id\n    page\n    pixKey\n  }\n}\n"
  }
};
})();

(node as any).hash = "f9d1911f5f847c1ce79f3d5ced44e9b0";

export default node;
