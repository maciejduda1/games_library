export interface Link {
	id: number;
	title: string;
	path: string;
}

const linkList: Link[] = [
	{
		id: 1,
		title: "home",
		path: "/",
	},
	{
		id: 2,
		title: "about",
		path: "/about",
	},
	{
		id: 3,
		title: "contact",
		path: "/contact",
	},
];
export default linkList;
