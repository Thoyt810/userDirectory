import React from 'react';
import SearchField from "../SearchField";




function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="search-area col-4">
                <SearchField />
            </div>
        </nav>
    );
}
export default Nav;