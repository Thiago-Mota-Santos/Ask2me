/**
 * @generated SignedSource<<a20693dc7eeb05fa8fb3597dbb2d907d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CardInfo_card$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly id: string;
      readonly page: string;
    } | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "CardInfo_card";
};
export type CardInfo_card$key = {
  readonly " $data"?: CardInfo_card$data;
  readonly " $fragmentSpreads": FragmentRefs<"CardInfo_card">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CardInfo_card",
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
  "type": "ProfileConnection",
  "abstractKey": null
};

(node as any).hash = "7675d7eced59acad90396740de4dbd3a";

export default node;
