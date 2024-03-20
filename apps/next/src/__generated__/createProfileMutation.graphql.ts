/**
 * @generated SignedSource<<6c55917f22880d463b87f80b20c33791>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SocialMediaInput = {
  X?: string | null | undefined;
  instagram?: string | null | undefined;
  linkedin?: string | null | undefined;
  twitch?: string | null | undefined;
  whatsapp?: string | null | undefined;
  youtube?: string | null | undefined;
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
          readonly X: string | null | undefined;
          readonly instagram: string | null | undefined;
          readonly linkedin: string | null | undefined;
          readonly twitch: string | null | undefined;
          readonly whatsapp: string | null | undefined;
          readonly youtube: string | null | undefined;
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
      "name": "whatsapp",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "linkedin",
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
    "cacheID": "335309770f0388fcc51d5484d188ba5b",
    "id": null,
    "metadata": {},
    "name": "createProfileMutation",
    "operationKind": "mutation",
    "text": "mutation createProfileMutation(\n  $page: String!\n  $pixKey: String!\n  $description: String!\n  $socialMedia: SocialMediaInput\n) {\n  profileRegisterMutation(input: {page: $page, pixKey: $pixKey, description: $description, socialMedia: $socialMedia}) {\n    profileEdge {\n      node {\n        page\n        pixKey\n        description\n        socialMedia {\n          instagram\n          whatsapp\n          linkedin\n          X\n          twitch\n          youtube\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "74da228abac9b4ad4bba7cbd5704f7e0";

export default node;
