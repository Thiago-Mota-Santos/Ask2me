/**
 * @generated SignedSource<<eeee3828aab2a7a2325b5dc9b6b83a91>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProfileInfo_profile$data = {
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
      "kind": "ScalarField",
      "name": "page",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "pixKey",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
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
    }
  ],
  "type": "Profile",
  "abstractKey": null
};

(node as any).hash = "1c9c2505735e5122cf9f7587da333c3a";

export default node;
