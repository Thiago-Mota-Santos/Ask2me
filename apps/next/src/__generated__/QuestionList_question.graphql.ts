/**
 * @generated SignedSource<<e9ddfbbec6ec5124a16e19897a75a1c0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuestionList_question$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly answer: string | null | undefined;
      readonly id: string;
      readonly page: string | null | undefined;
      readonly text: string;
    } | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "QuestionList_question";
};
export type QuestionList_question$key = {
  readonly " $data"?: QuestionList_question$data;
  readonly " $fragmentSpreads": FragmentRefs<"QuestionList_question">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QuestionList_question",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "QuestionEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Question",
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
              "name": "text",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "answer",
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
  "type": "QuestionConnection",
  "abstractKey": null
};

(node as any).hash = "388ef17bb9001fa12b73c011881be4c7";

export default node;
