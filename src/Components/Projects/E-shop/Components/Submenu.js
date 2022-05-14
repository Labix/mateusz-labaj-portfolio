import { useState } from "react"
import styled from 'styled-components';
import { Link } from "react-router-dom";

const SidebarLink = styled.div`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: white;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled.div`
  background: white;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 18px;
  &:hover {
    background: white;
    cursor: pointer;
  }
`;

const Submenu = ({item}) =>{
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return(
        <div>
            <SidebarLink className="flex" onClick={item.subNav && showSubnav}>
                <div className="">
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>+</div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index)=>{
                return(
                  <Link to={item.path}>
                    <DropdownLink key={index}>
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                  </Link>
                );
            })}
        </div>

    );
};

export default Submenu;