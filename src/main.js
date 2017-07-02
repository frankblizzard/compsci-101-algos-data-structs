import orderedArray, {
	insertion,
	deletion,
	binarySearch,
	reset
} from "./orderedArray";
import unorderedArray from "./unorderedArray";
import helpers from "./helpers";

// Event listeners
document.querySelector(".insert").addEventListener("click", () => {
	insertion(document.querySelector(".insertinput").value);
});

document.querySelector(".delete").addEventListener("click", () => {
	reset();
	deletion(parseInt(document.querySelector(".deleteinput").value));
});

document.querySelector(".search").addEventListener("click", () => {
	binarySearch(parseInt(document.querySelector(".searchinput").value));
});

[1, 2, 3, 4, 5].forEach(insertion);


export default {
	unorderedArray
};
