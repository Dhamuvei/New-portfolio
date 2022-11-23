import React from "react";
import "./Nav.css";
import {BiHome} from "react-icons/bi";
import {FiUser} from 'react-icons/fi';
import {GiSkills} from 'react-icons/gi';
import {ImBook} from 'react-icons/im';
import {BiMessageRoundedDetail}from 'react-icons/bi';
import {GiBrain} from "react-icons/gi"



const Nav = () => {
return(
    <nav>
        <a href="#" className="active"><BiHome/></a>
        <a href="#about"><FiUser/></a>
        <a href="#experience"><GiSkills/></a>
        <a href="#service"><ImBook/></a>
        <a href="#portfolio"><GiBrain/></a>
        <a href="#contact"><BiMessageRoundedDetail/></a>
    </nav>
)
};

export default Nav;