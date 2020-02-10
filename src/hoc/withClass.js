import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
};
  // <div className={props.classes}>{props.children}</div>

export default withClass;
