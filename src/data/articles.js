import React from "react";

function article_1() {
	return {
		date: "Coming Soon",
		title: "Building Secure On-Premise DGX Clusters",
		description:
			"A deep dive into the architecture, networking, and compliance constraints of building secure, private LLM hosting environments on NVIDIA DGX hardware.",
		keywords: [
			"Murilo Machado",
			"DGX",
			"MLOps",
			"Security",
			"Networking",
		],
		style: ``,
		body: (
			<React.Fragment>
				<p>This article is currently being drafted. Check back soon for the full technical breakdown.</p>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1];

export default myArticles;
