/**
 * @generated SignedSource<<803010d3d2d4af109fde2a55d4b6dc20>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type rootLayoutQuery$variables = Record<PropertyKey, never>;
export type rootLayoutQuery$data = {
  readonly questions: {
    readonly " $fragmentSpreads": FragmentRefs<"QuestionList_question">;
  };
};
export type rootLayoutQuery = {
  response: rootLayoutQuery$data;
  variables: rootLayoutQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "rootLayoutQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "QuestionConnection",
        "kind": "LinkedField",
        "name": "questions",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "QuestionList_question"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "rootLayoutQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "QuestionConnection",
        "kind": "LinkedField",
        "name": "questions",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "QuestionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
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
                    "name": "page",
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
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
    ]
  },
  "params": {
    "cacheID": "d5fe2599a5440b739f112ce919b73e0f",
    "id": null,
    "metadata": {},
    "name": "rootLayoutQuery",
    "operationKind": "query",
    "text": "query rootLayoutQuery {\n  questions {\n    ...QuestionList_question\n  }\n}\n\nfragment QuestionList_question on QuestionConnection {\n  edges {\n    node {\n      page\n      text\n      answer\n      id\n    }\n  }\n}\n"
  }
};

(node as any).hash = "332bd87482e5f5b765e66dd847f67be3";

export default node;
