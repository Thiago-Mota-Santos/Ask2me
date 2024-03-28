/**
 * @generated SignedSource<<302f7a36c7081e08fee6622299ff1080>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProfileInfo_profile$data = {
  readonly profile: {
    readonly page: string;
    readonly socialMedia: {
      readonly X: string;
      readonly instagram: string;
      readonly twitch: string;
      readonly youtube: string;
    } | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ProfileInfo_profile";
};
export type ProfileInfo_profile$key = {
  readonly " $data"?: ProfileInfo_profile$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProfileInfo_profile">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProfileInfo_profile",
  "selections": [
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
          "name": "page",
          "storageKey": null
        },
        {
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
              "name": "youtube",
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "ea02e58ca796a0f2d5ad722e5d8691b0";

export default node;
