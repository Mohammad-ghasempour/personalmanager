import React from "react";
// We use this hoc for future Error handling
const withClass = (WrappedComponent, className)=>{
    return props =>(
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
}

export default withClass;