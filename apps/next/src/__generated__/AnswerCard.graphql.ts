/**
 * @generated SignedSource<<47aafbf8194d8008575f8932bfef92e4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AnswerCard$data = {
  readonly profile: {
    readonly id: string;
    readonly page: string;
    readonly pixKey: string;
  } | null | undefined;
  readonly question: {
    readonly answer: string | null | undefined;
    readonly id: string;
    readonly page: string | null | undefined;
    readonly text: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "AnswerCard";
};
export type AnswerCard$key = {
  readonly " $data"?: AnswerCard$data;
  readonly " $fragmentSpreads": FragmentRefs<"AnswerCard">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "page",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "profileId"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "AnswerCard",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "profileId",
          "variableName": "profileId"
        }
      ],
      "concreteType": "Question",
      "kind": "LinkedField",
      "name": "question",
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
        (v1/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Profile",
      "kind": "LinkedField",
      "name": "profile",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "pixKey",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "f0b7d23eee50f5612b8896cc9510a153";

export default node;
