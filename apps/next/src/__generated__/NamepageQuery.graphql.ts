/**
 * @generated SignedSource<<a02a3a483a2c1a1d665c2f505893158c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NamepageQuery$variables = Record<PropertyKey, never>;
export type NamepageQuery$data = {
  readonly profiles: {
    readonly " $fragmentSpreads": FragmentRefs<"CardInfo_card">;
  };
};
export type NamepageQuery = {
  response: NamepageQuery$data;
  variables: NamepageQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NamepageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ProfileConnection",
        "kind": "LinkedField",
        "name": "profiles",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CardInfo_card"
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
    "name": "NamepageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ProfileConnection",
        "kind": "LinkedField",
        "name": "profiles",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ProfileEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Profile",
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
    "cacheID": "d9de8346e5448cdea80abcb9e6fdf035",
    "id": null,
    "metadata": {},
    "name": "NamepageQuery",
    "operationKind": "query",
    "text": "query NamepageQuery {\n  profiles {\n    ...CardInfo_card\n  }\n}\n\nfragment CardInfo_card on ProfileConnection {\n  edges {\n    node {\n      page\n      id\n    }\n  }\n}\n"
  }
};

(node as any).hash = "cff6194b25b88e414426f4d62d19baf2";

export default node;
