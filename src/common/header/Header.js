import React, { Component } from 'react';
import './Header.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Input } from '@material-ui/core';

class Header extends Component {

    render(){
        return(
            <header className="app-header">
                <div className="app-container">
                    <div className="app-logo">Image Viewer</div>
                    {this.props.showSearchBox === "true" ?
                         <div className="search-container">
                             <SearchRoundedIcon />
                             <Input className="search-box" disableUnderline={true} placeholder="Search…" />
                         </div>
                        : ""
                        }
                </div>
            </header>
            
        )
    }
}

export default Header;