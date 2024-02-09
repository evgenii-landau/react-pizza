import React from "react"
import ContentLoader from "react-content-loader"


export const Skeleton: React.FC = () => {
	return (
		<ContentLoader
			speed={2}
			width={280}
			height={500}
			viewBox="0 0 280 500"
			backgroundColor="#f2e3e3"
			foregroundColor="#e9e9c3"
		>
			<circle cx="133" cy="126" r="125" />
			<rect x="45" y="294" rx="5" ry="5" width="180" height="23" />
			<rect x="135" y="228" rx="0" ry="0" width="11" height="2" />
			<rect x="1" y="341" rx="13" ry="13" width="270" height="88" />
			<rect x="0" y="462" rx="5" ry="5" width="53" height="25" />
			<rect x="122" y="449" rx="24" ry="24" width="152" height="48" />
		</ContentLoader>
	)
}