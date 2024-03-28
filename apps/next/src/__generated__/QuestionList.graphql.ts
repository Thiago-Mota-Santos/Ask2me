/**
 * @generated SignedSource<<2ff181fffe74947ac00df16b7ae92cdc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuestionList$data = {
  readonly " $fragmentSpreads": FragmentRefs<"QuestionDetails_question">;
  readonly " $fragmentType": "QuestionList";
};
export type QuestionList$key = {
  readonly " $data"?: QuestionList$data;
  readonly " $fragmentSpreads": FragmentRefs<"QuestionList">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QuestionList",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "QuestionDetails_question"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "1a52766a30085c9bff96ea959e7391ad";

export default node;
