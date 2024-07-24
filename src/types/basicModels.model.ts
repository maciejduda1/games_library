import { CollectionElementModel } from "./collectionElement.model";

export interface Game extends CollectionElementModel {
	year: number;
	description: string;
}

export interface Book extends CollectionElementModel {
	year: number;
	description: string;
	isbn: string;
	publisher: string;
}
export interface Comic extends CollectionElementModel {}
