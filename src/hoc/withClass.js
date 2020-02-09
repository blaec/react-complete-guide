import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent/>
        </div>
    );
};
  // <div className={props.classes}>{props.children}</div>

export default withClass;
