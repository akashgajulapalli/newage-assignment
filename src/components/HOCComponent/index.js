import React, { useState, useEffect } from 'react';

function AuthComponent(Page) {
    return function (props) {
        const [loading, setLoading] = useState(true);
        const [authenticated, setAuthenticated] = useState(false);

        useEffect(() => {
            setLoading(true);
            const timer = setTimeout(() => {
                setAuthenticated(true);   
                setLoading(false);
            }, 4000);

            return () => clearTimeout(timer);
        }, []);

        if (loading) {
            return <p>Checking authentication...</p>; 
        }

        if (!authenticated) {
            return <p>Authentication failed</p>; 
        }

        return <Page {...props} />; 
    };
}

export default AuthComponent;
