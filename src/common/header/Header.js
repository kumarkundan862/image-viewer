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
                         <div className="search-profile-container">
                         <div className="search-container">
                             <SearchRoundedIcon />
                             <Input className="search-box" disableUnderline={true} placeholder="Search…" />      
                         </div>
                         <div className="profilePic">
                         <img src="https://images.upgrad.com/dbcba774-1e6f-4838-b4ad-816468779a4b-Screenshot%202018-10-04%20at%205.51.45%20PM.png" 
                         className="profilePic" alt="profilePic" /> 
                         </div>
                        </div>
                        : ""
                        }
                       
                </div>
            </header>
            
        )
    }
}

export default Header;