export type GameSearchResultModel = {
	id: string;
	title: string;
};

export interface BooksVolumesResponse {
	kind: string;
	totalItems: number;
	items: BookItem[];
}

export interface VolumeInfo {
	title: string;
	subtitle?: string;
	authors: string[];
	categories: string[];
	publishedDate?: string | number;
	description?: string;
	language: string;
	imageLinks: {
		thumbnail: string;
	};
	averageRating?: number;
	pageCount?: number;
	publisher?: string;
	industryIdentifiers: {
		type: string;
		identifier: string;
	}[];
}

export interface BookItem {
	id: string;
	volumeInfo: VolumeInfo;
	isWishlish?: boolean;
}
