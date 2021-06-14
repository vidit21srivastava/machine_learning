import React, { useState} from 'react'
import './Header.scoped.css';
import ProjectList from '../Projects/ProjectList.js';
import TocIcon from '@material-ui/icons/Toc';
import CancelIcon from '@material-ui/icons/Cancel';
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Header() {  
    const [checked, setChecked] = useState(false);
    function handleClick(){
        setChecked(!checked);
    }
    function NavItem(props) {
        return (
          <li onClick={handleClick} key={props.name}><AnchorLink href={`#${props.name}`} >{props.name}</AnchorLink></li>
        );
    }
    function navItems(){
        var list=[];
        for(var i=0;i<ProjectList.length;++i)list.push(NavItem({name:ProjectList[i].url,key:ProjectList[i].url}));
        return list;
    }
    return (
        <div id="Head">
            <input type="checkbox" id="check" checked={checked} onChange={(e)=>setChecked(!e.target.checked)}/>
            <label htmlFor="check">
                <TocIcon onClick={handleClick} id="nav-btn"/>
                <CancelIcon onClick={handleClick} id="nav-cancel"/>
            </label>
            <div id="Header">                
                <a href="/" className="nav-heading">
                    <img src="https://erp.iitbbs.ac.in/lib/img/images/iitb.png" alt="logo"/>
                    <span>ML</span>
                </a>
                <ul className="sidebar">{navItems()}</ul>
            </div>
        </div>
    )
}

export default Header
