/**
 * @generated SignedSource<<c7db7c71fc8d7a13e71fece083a13c14>>
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
  readonly question: {
    readonly " $fragmentSpreads": FragmentRefs<"AnswerCard">;
  } | null | undefined;
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
v1 = [
  {
    "kind": "Variable",
    "name": "profileId",
    "variableName": "profileId"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "QuestionPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Question",
        "kind": "LinkedField",
        "name": "question",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AnswerCard"
          }
        ],
        "storageKey": null
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
        "args": (v1/*: any*/),
        "concreteType": "Question",
        "kind": "LinkedField",
        "name": "question",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "page",
            "storageKey": null
          },
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
    ]
  },
  "params": {
    "cacheID": "0130989ca11cc5f7ce3b64dfd384eb81",
    "id": null,
    "metadata": {},
    "name": "QuestionPageQuery",
    "operationKind": "query",
    "text": "query QuestionPageQuery(\n  $profileId: String!\n) {\n  question(profileId: $profileId) {\n    ...AnswerCard\n    id\n  }\n}\n\nfragment AnswerCard on Question {\n  page\n  id\n  text\n  answer\n}\n"
  }
};
})();

(node as any).hash = "7015b9c3d1178ad0bc318821c5644ab5";

export default node;
