import React from "react";
import Result from "../shared/result";

function ResultsComponent ({ results, openPopup }) {
	return (
		<section className="results">
			{results && results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</section>
	)
}

export default ResultsComponent;
