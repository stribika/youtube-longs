/* YouTube suppresses navigation with HTTP 204 and re-draws the page instead. */
(function() {
	const mut = new MutationObserver((mutationList, observer) => {
		if (document.location.pathname.startsWith("/shorts/")) {
			document.location.href = "https://www.youtube.com/watch?v=" + document.location.pathname.split("/")[2];
		}
	});
	mut.observe(document.body, { childList: true, subtree: true });
})();
