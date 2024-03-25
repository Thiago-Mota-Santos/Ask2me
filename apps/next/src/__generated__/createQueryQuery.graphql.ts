/**
 * @generated SignedSource<<4827b95d2d82d914a33116eb9aa74479>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type createQueryQuery$variables = Record<PropertyKey, never>;
export type createQueryQuery$data = {
  readonly profile: {
    readonly id: string;
  } | null | undefined;
};
export type createQueryQuery = {
  response: createQueryQuery$data;
  variables: createQueryQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Profile",
    "kind": "LinkedField",
    "name": "profile",
    "plural": false,
    "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "createQueryQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "createQueryQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "33c0aa645cac4883f8d15c4a5e34a4d6",
    "id": null,
    "metadata": {},
    "name": "createQueryQuery",
    "operationKind": "query",
    "text": "query createQueryQuery {\n  profile {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "beb84528f85ff2e0087d4d154b1c7685";

export default node;
