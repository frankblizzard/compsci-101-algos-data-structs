
const dataset = [];

// Dimensions
const width = 1000;
const height = 200;
const barWidth = 100; 
const padding = 25;
const barWithPadding = barWidth + padding;

// Colors
const BASE_COLOR = "papayawhip";
const SEARCHING_COLOR = "purple";
const FOUND_COLOR = "green";
const DELETED_COLOR = "red";

// Timing
const BAR_ANIMATION_TIME = 1000;


const insertion = (num) => { 
	const bar = document.createElement("div"); 
	bar.classList.add("bar");
	const barHeight = num * 10;
	bar.style.height = barHeight + "px";
	bar.style.width = `${barWidth}px` 
	bar.innerText = num;
	bar.style.fontFamily = "sans-serif";
	bar.style.fontSize = "20px";
	bar.style.opacity = 1;
	bar.dataset.data = num;

	const leftValue = (barWithPadding * dataset.length); 	
	bar.style.left = leftValue + "px";
	bar.style.top = (height - barHeight) + "px";

	dataset.push(bar);

	document.querySelector(".container").appendChild(bar);
}

// prop :: Object -> String -> a
const prop = (obj) => (key) => obj[key];

const deletion = (idx) => {
	const elementToDelete = dataset[idx];

	elementToDelete.style.backgroundColor = DELETED_COLOR;
	elementToDelete.style.top = "300px";
	elementToDelete.style.opacity = "0";
	dataset.splice(idx, 1);
	setTimeout(() => {
		dataset[idx].parentNode.removeChild(elementToDelete);
	}, 4000);

	let i = idx;
	const animateBars = setInterval(() => {
		if (i === dataset.length - 1) {
			clearInterval(animateBars);
		}
		const nextBar = dataset[i];
		nextBar.style.left = `${parseInt(nextBar.style.left) - barWithPadding}px`;
		i++;
	}, BAR_ANIMATION_TIME);

}

const linearSearch = (elementToFind) => { 

	let i = 0;
	const animateBars = setInterval(() => {
		const el = dataset[i];

		if (i === dataset.length - 1) {
			clearInterval(animateBars);
		}

		el.style.backgroundColor = SEARCHING_COLOR;

		if (el.dataset.data === elementToFind.toString()) {
			el.style.backgroundColor = FOUND_COLOR;
			clearInterval(animateBars);
		}

		i++;
	}, BAR_ANIMATION_TIME);
}

const reset = () => { 
	dataset.forEach((bar) => bar.style.backgroundColor = BASE_COLOR);
}


// Event listeners
document.querySelector(".insert").addEventListener("click", () => {
	insertion(document.querySelector(".insertinput").value);
});

document.querySelector(".delete").addEventListener("click", () => {
	reset();
	deletion(parseInt(document.querySelector(".deleteinput").value));
});

document.querySelector(".search").addEventListener("click", () => {
	reset();
	linearSearch(document.querySelector(".searchinput").value);
});

[1, 2, 3, 4, 5].forEach(insertion);

export default {
	insertion,
	deletion,
	linearSearch
};
