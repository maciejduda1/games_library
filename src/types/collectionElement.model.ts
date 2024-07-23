export interface CollectionElementModel {
	id: string | number;
	title: string;
	image: string;
	author: string;
	type: CollectionType;
}

type CollectionType = (typeof Collection)[keyof typeof Collection];

export const Collection = {
	GAMES: "games",
	BOOKS: "books",
	COMICS: "comics",
} as const;
