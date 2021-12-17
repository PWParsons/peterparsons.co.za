export function clickOutside(node, handler) {
	const onClick = function (event) {
		return node && !node.contains(event.target) && !event.defaultPrevented && handler();
	};
	document.addEventListener('click', onClick, true);
	return {
		destroy: function () {
			document.removeEventListener('click', onClick, true);
		}
	};
}
