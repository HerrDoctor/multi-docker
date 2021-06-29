import React from 'react';
import { Link } from 'react-router-dom';

function otherPage() {
    return (
        <div>
            Ooops! You are not in the home page.
            <Link to="/">Go to Homepage</Link>
        </div>
    );
}
export default otherPage;