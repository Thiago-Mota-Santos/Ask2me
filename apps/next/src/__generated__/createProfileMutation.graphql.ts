/**
 * @generated SignedSource<<8247bccfd869ab9032d11a04d634901e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SocialMediaInput = {
  X: string;
  instagram: string;
  twitch: string;
  youtube: string;
};
export type createProfileMutation$variables = {
  description: string;
  page: string;
  pixKey: string;
  socialMedia?: SocialMediaInput | null | undefined;
};
export type createProfileMutation$data = {
  readonly profileRegisterMutation: {
    readonly profileEdge: {
      readonly node: {
        readonly description: string | null | undefined;
        readonly page: string;
        readonly pixKey: string;
        readonly socialMedia: {
          readonly X: string;
          readonly instagram: string;
          readonly twitch: string;
          readonly youtube: string;
        } | null | undefined;
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type createProfileMutation = {
  response: createProfileMutation$data;
  variables: createProfileMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "pixKey"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "socialMedia"
},
v4 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "page",
        "variableName": "page"
      },
      {
        "kind": "Variable",
        "name": "pixKey",
        "variableName": "pixKey"
      },
      {
        "kind": "Variable",
        "name": "socialMedia",
        "variableName": "socialMedia"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "page",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "pixKey",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "SocialMedia",
  "kind": "LinkedField",
  "name": "socialMedia",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "instagram",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "X",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "twitch",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "youtube",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createProfileMutation",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "ProfileRegisterMutationPayload",
        "kind": "LinkedField",
        "name": "profileRegisterMutation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ProfileEdge",
            "kind": "LinkedField",
            "name": "profileEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Profile",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/)
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "createProfileMutation",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "ProfileRegisterMutationPayload",
        "kind": "LinkedField",
        "name": "profileRegisterMutation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ProfileEdge",
            "kind": "LinkedField",
            "name": "profileEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Profile",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
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
    "cacheID": "f8d2809431d290296b7425332ec7917d",
    "id": null,
    "metadata": {},
    "name": "createProfileMutation",
    "operationKind": "mutation",
    "text": "mutation createProfileMutation(\n  $page: String!\n  $pixKey: String!\n  $description: String!\n  $socialMedia: SocialMediaInput\n) {\n  profileRegisterMutation(input: {page: $page, pixKey: $pixKey, description: $description, socialMedia: $socialMedia}) {\n    profileEdge {\n      node {\n        page\n        pixKey\n        description\n        socialMedia {\n          instagram\n          X\n          twitch\n          youtube\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7d8ce80ba315dce899d951f91497a51f";

export default node;
