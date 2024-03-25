/**
 * @generated SignedSource<<b5cae01aa0acd3765a73f8d225efd636>>
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

(node as any).hash = "29bed10b974a9959bca35ac53b35457f";

export default node;
