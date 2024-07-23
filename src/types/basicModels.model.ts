import { CollectionElementModel } from "./collectionElement.model";

export interface Game extends CollectionElementModel {
	year: number;
	description: string;
}

export interface Book extends CollectionElementModel {}
export interface Comic extends CollectionElementModel {}
