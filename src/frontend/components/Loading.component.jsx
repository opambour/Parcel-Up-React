import React from 'react';

const LoadingComponent = props => {
	const loading = () => {
		if (props.error) {
			return (
				<div>
					Error! <button onClick={props.retry}>Retry</button>
				</div>
			);
		} else if (props.pastDelay) {
			return <div>Loading...</div>;
		} else {
			return null;
		}
	};

	return <>{loading()}</>;
};

export default React.memo(LoadingComponent);
