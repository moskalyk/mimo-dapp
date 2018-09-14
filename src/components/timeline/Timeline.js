import React from 'react';
import TimelineItem from './TimelineItem'

// https://wikiki.github.io/components/timeline/
// Demo: https://wikiki.github.io/components/timeline/

// Stateless Components.
// TODO: Switch to Fanzzzyy timeline
const Timeline = ({ timeline }) => {

	const items = timeline.map((item) => <TimelineItem key={item.id} date={item.date} content={item.details}></TimelineItem>);

	return (
		<div>
			<div className="container">
				
				{/*TODO: Export a React components*/}
				<div className="timeline">
				  <header className="timeline-header">
				    <span className="tag is-medium is-primary">Start</span>
				  </header>
				  {/*<div className="timeline-item">
				    <div className="timeline-marker"></div>
				    <div className="timeline-content">
				      <p className="heading">January 2016</p>
				      <p>Timeline content - Can include any HTML element</p>
				    </div>
				  </div>*/}
				  {items}
				  <div className="timeline-item">
				    <div className="timeline-marker is-image is-32x32">
				    </div>
				    <div className="timeline-content">
				      <p className="heading">February 2016</p>
				      <p>Timeline content - Can include any HTML element</p>
				    </div>
				  </div>
				  <header className="timeline-header">
				    <span className="tag is-primary">2017</span>
				  </header>
				  <div className="timeline-item">
				    <div className="timeline-marker is-icon">
				      <i className="fa fa-flag"></i>
				    </div>
				    <div className="timeline-content">
				      <p className="heading">March 2017</p>
				      <p>Timeline content - Can include any HTML element</p>
				    </div>
				  </div>
				  <div className="timeline-header">
				    <span className="tag is-medium is-primary">End</span>
				  </div>
				</div>
			</div>
		</div>
	);
}


export default Timeline;
