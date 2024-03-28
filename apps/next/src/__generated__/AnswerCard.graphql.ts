/**
 * @generated SignedSource<<4e7a8fbe082d010f9817c2979b29bd27>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AnswerCard$data = {
  readonly answer: string | null | undefined;
  readonly id: string;
  readonly page: string | null | undefined;
  readonly text: string | null | undefined;
  readonly " $fragmentType": "AnswerCard";
};
export type AnswerCard$key = {
  readonly " $data"?: AnswerCard$data;
  readonly " $fragmentSpreads": FragmentRefs<"AnswerCard">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AnswerCard",
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
    }
  ],
  "type": "Question",
  "abstractKey": null
};

(node as any).hash = "f399cba95b4b024add135e5206822b96";

export default node;
