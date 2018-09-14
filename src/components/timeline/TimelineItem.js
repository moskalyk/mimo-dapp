import React from 'react';

// Stateless Components.
const TimelineItem = ({ details, date }) => (
	<div className="timeline-item">
		<div className="timeline-marker"></div>
		<div className="timeline-content">
			<p className="heading">{date}</p>
			<p>{details}</p>
		</div>
	</div>
);


export default TimelineItem;
