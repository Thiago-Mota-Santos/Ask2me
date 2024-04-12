/**
 * @generated SignedSource<<b6a62bed5bc8b4ab6770389fd0c1e67f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type createQrCodeMutation$variables = {
  name: string;
  value: number;
};
export type createQrCodeMutation$data = {
  readonly QrCodeRegisterMutation: {
    readonly profileEdge: {
      readonly node: {
        readonly brcode: string;
        readonly correlationID: string;
        readonly identifier: string;
        readonly image: string | null | undefined;
        readonly name: string;
        readonly value: number;
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type createQrCodeMutation = {
  response: createQrCodeMutation$data;
  variables: createQrCodeMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "value"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "value",
        "variableName": "value"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "correlationID",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "brcode",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createQrCodeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "QrCodeRegisterPayload",
        "kind": "LinkedField",
        "name": "QrCodeRegisterMutation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "QrCodeEdge",
            "kind": "LinkedField",
            "name": "profileEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "QrCode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createQrCodeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "QrCodeRegisterPayload",
        "kind": "LinkedField",
        "name": "QrCodeRegisterMutation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "QrCodeEdge",
            "kind": "LinkedField",
            "name": "profileEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "QrCode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
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
    "cacheID": "a037dec65964d3a4284eb8ba5d3effd8",
    "id": null,
    "metadata": {},
    "name": "createQrCodeMutation",
    "operationKind": "mutation",
    "text": "mutation createQrCodeMutation(\n  $name: String!\n  $value: Int!\n) {\n  QrCodeRegisterMutation(input: {name: $name, value: $value}) {\n    profileEdge {\n      node {\n        name\n        identifier\n        correlationID\n        value\n        image\n        brcode\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "784000b2a2af2b8e399818a1c0a4b34d";

export default node;
