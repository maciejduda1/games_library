export function reduceStringArray(strings: string[] | undefined): string {
	if (!strings) return "";

	return strings
		.reduce((final, s) => final + ", " + s, "")
		.substring(1)
		.trim();
}

export function getYearFromDate(date: string | number | undefined): number {
	if (!date) return 0;

	return new Date(date).getFullYear();
}

export function decodeHtml(html: string | null | undefined) {
	if (!html) {
		return "";
	}
	let areaElement = document.createElement("textarea");
	areaElement.innerHTML = html;

	return areaElement.value;
}
