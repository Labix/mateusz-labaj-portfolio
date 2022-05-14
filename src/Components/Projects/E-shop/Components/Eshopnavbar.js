import React, { useState, useEffect, useRef } from "react";
import {gsap} from'gsap';
import styled from 'styled-components'
import { DriveEtaOutlined, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import './index.css'
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import './Navbar.css'
import './Searchbar.css'
import Submenu from "./Submenu";


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  &:hover {
    border-radius: 5px;
    transform: scale(1.3);
  }
`;

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Eshopnavbar = () => {


    const [show, setshow] = useState('none');
    const [show2, setshow2] = useState('none');
    const [show3, setshow3] = useState('none');
    const [show4, setshow4] = useState('none');
    const [show5, setshow5] = useState('none');
    const [button1, setbutton1] = useState('none');
    const [button2, setbutton2] = useState('none');
    const [button3, setbutton3] = useState('none');
    const [button4, setbutton4] = useState('none');

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () =>{
        setSidebar(!sidebar);
        
    }
    
    useEffect(() => {
        if(sidebar) document.body.style.overflow = 'hidden';
        if(!sidebar) document.body.style.overflow = 'unset';
    }, [sidebar]);

    const [sidebaritem, setSidebaritem] = useState('none');

    const showsidebaritem = () =>{
        setSidebaritem(sidebaritem);
    }

    const setdiv = (show)=>{
        setshow(show);
    }

    const setdiv2 = (show2) => {
        setshow2(show2);
    }

    const setdiv3 = (show3) => {
        setshow3(show3);
    }

    const setdiv4 = (show4) => {
        setshow4(show4);
    }

    const setdiv5 = (show5) => {
        setshow5(show5);
    }

    const setButton1 = (button1) =>{
        setbutton1(button1);
    }

    const setButton2 = (button2) =>{
        setbutton2(button2);
    }

    const setButton3 = (button3) =>{
        setbutton3(button3);
    }

    const setButton4 = (button4) =>{
        setbutton4(button4);
    }

    return (
        <div className="h-20 md:h-40">
            <div className="mr-5 ml-5">
                <div className="h-20 pt-2.5 pr-5 flex items-center md:justify-between flex-nowrap">
                    <div className="flex items-center">
                        
                        <div className='search-box absolute hidden md:block'>
                            <input type='text' placeholder='Search here...' className="search-input"/>
                            <a href='#' className="search-btn">
                               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                        <div className="flex items-center">
                        <div className="md:hidden" onClick={showSidebar}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                            <div className="ml-10 md:ml-8 absolute h-10 grow md:grow-0 flex">
                                <h1 className="tracking-widest text-4xl md:text-5xl font-bold text-center font-Ubuntu">
                                    <Link to={'/eshop'}>
                                       LABAJ
                                    </Link>
                                </h1>
                                </div>
                        </div>
                            
                    
                    <div className="hidden md:flex align-center justify-end">
                        <div className="text-sm cursor-pointer ml-6">
                            <Link to={'/eshop/register'}>
                                <button className="font-bold tracking-widest hover:scale-110 hover:transition ease-out duration-100">REGISTER</button>
                            </Link>
                        </div>
                        <div className="text-sm cursor-pointer ml-6">
                            <Link to={'/eshop/login'}>
                                <button className="font-bold tracking-widest hover:scale-110 hover:transition ease-out duration-100">SIGN IN</button>
                            </Link>
                        </div>
                        <div className="text-sm cursor-pointer ml-6">
                            <Badge badgeContent={4} color='primary'>
                                <Link to={'/eshop/cart'}>
                                    <ShoppingCartOutlined className="hover:scale-110 hover:transition ease-out duration-100"/>
                                </Link>
                            </Badge>
                        </div>
                    </div>
                    <div className="flex ml-auto md:hidden">
                        <div className="text-sm cursor-pointer">
                            <Badge badgeContent={4} color='primary'>
                                <Link to={'/eshop/cart'}>
                                    <ShoppingCartOutlined className="hover:scale-110 hover:transition ease-out duration-100" />
                                </Link>
                            </Badge>
                        </div>
                        
                            <div className="text-sm cursor-pointer ml-2">
                                    <Link to={'/eshop/login'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    </Link>
                            </div>
                    </div>
                </div>
                
            </div>
                <div className="hidden mr-5 md:flex justify-center gap-10 mt-1">
                        <button onMouseEnter={() => setdiv('block')} onMouseLeave={() => setdiv('none')} className="h-14 font-Raleway font-bold">News</button>
                        <button onMouseEnter={() => setdiv2('block')} onMouseLeave={() => setdiv2('none')} className="h-14 tracking-widest font-bold">Man</button>
                        <button onMouseEnter={() => setdiv3('block')} onMouseLeave={() => setdiv3('none')} className="h-14 tracking-widest font-bold">Woman</button>
                        <button onMouseEnter={() => setdiv4('block')} onMouseLeave={() => setdiv4('none')} className="h-14 tracking-widest font-bold">Boy</button>
                        <button onMouseEnter={() => setdiv5('block')} onMouseLeave={() => setdiv5('none')} className="h-14 tracking-widest font-bold">Girl</button>   
                </div>

                           <SidebarNav sidebar={sidebar}>
                               <SidebarWrap>
                                  <NavIcon to='#'>
                                      <div onClick={showSidebar}>X</div>
                                   </NavIcon>
                                   {SideBarData.map((item, index) =>{
                                      return <Submenu item={item} key={index}/>
                                   })}
                               </SidebarWrap>
                            </SidebarNav>
                
            <div style={{ display: `${show}`, zIndex: '3', position: 'relative' }} id="stuff" className='h-96 bg-white border-t border-slate-200'>
                <div onMouseEnter={() => setdiv('block')} onMouseLeave={() => setdiv('none')} className="w-full h-full grid grid-cols-4">
                    <div className="col-span-1 flex justify-center items-center flex-col gap-5">
                        
                        <div className="bg-red-500 w-80 h-56 flex z-50">
                            <Container>
                            <img style={{ zIndex: '2' }} src={require('./man.jpg')} className='max-w-full h-56' id="man" />
                                    <Info>
                                        <Button>
                                            <Link to={'/eshop/productlistman'}>
                                                <button className="btn z-40">SHOP NOW</button>
                                            </Link>
                                        </Button>
                                    </Info>
                            </Container>
                        </div>
                            
                        <span className="tracking-widest">Man</span>
                    </div>
                    <div className="col-span-1 flex justify-center items-center flex-col gap-5">
                        <div className="bg-red-500 w-80 h-56 flex z-50">
                            <Container>
                                <img style={{ zIndex: '2' }} src={require('./woman.jpg')} className='max-w-full h-56'/>
                                <Info>
                                    <Button>
                                        <Link to={'/eshop/productlistwoman'}>
                                            <button className="btn z-40">SHOP NOW</button>
                                        </Link>
                                    </Button>
                                </Info>
                            </Container>
                        </div>
                        <span className="tracking-widest">Woman</span>
                    </div>
                    <div className="col-span-1 flex justify-center items-center flex-col gap-5">
                        <div className="bg-red-500 w-80 h-56 flex z-50">
                            <Container>
                                <img style={{ zIndex: '2' }} src={require('./boy.jpg')} className='max-w-full h-56'/>
                                <Info>
                                    <Button>
                                        <Link to={'/eshop/productlistboy'}>
                                            <button className="btn z-40">SHOP NOW</button>
                                        </Link>
                                    </Button>
                                </Info>
                            </Container>
                        </div>
                        <span className="tracking-widest">Boy</span>
                    </div>
                    <div className="col-span-1 flex justify-center items-center flex-col gap-5">
                        <div className="bg-red-500 w-80 h-56 flex z-50">
                            <Container>
                                <img style={{ zIndex: '2' }} src={require('./girl.jpg')} className='max-w-full h-56'/>
                                <Info>
                                    <Button>
                                        <Link to={'/eshop/productlistgirl'}>
                                            <button className="btn z-40">SHOP NOW</button>
                                        </Link>
                                    </Button>
                                </Info>
                            </Container>
                        </div>
                        <span className="tracking-widest">Girl</span>
                    </div>
                </div>
            </div>
            
            <div style={{ display: `${show2}`, zIndex: '2', position: 'relative' }} id="stuff" className='h-80 bg-white border-t border-slate-200'>
                <div onMouseEnter={() => setdiv2('block')} onMouseLeave={() => setdiv2('none')} className="w-full h-full grid grid-cols-5">
                    <div className="ml-10 mt-5 col-span-1 text-slate-400">Clothes
                        <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-black hover:cursor-pointer">Shirts</p>
                            <p className="text-black hover:cursor-pointer">Jackets</p>
                            <p className="text-black hover:cursor-pointer">Trousers</p>
                            <p className="text-black hover:cursor-pointer">Jeans</p>
                            <p className="text-black hover:cursor-pointer">Shorts</p>
                            <p className="text-black hover:cursor-pointer">Coats</p>
                            <p className="text-black hover:cursor-pointer">Vests</p>
                            <p className="text-black hover:cursor-pointer">Suits</p>
                        </div>
                    </div>
                    <div className="mt-5 ml-10 col-span-1 text-slate-400">Shoes
                        <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-black hover:cursor-pointer">Sneakers</p>
                            <p className="text-black hover:cursor-pointer">Boots</p>
                            <p className="text-black hover:cursor-pointer">Trainers</p>
                            <p className="text-black hover:cursor-pointer">Moccassins</p>
                            <p className="text-black hover:cursor-pointer">Sports shoes</p>
                        </div>
                    </div>
                    <div className="mt-5 ml-10 col-span-1 text-slate-400">Underwear & Accesories
                        <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-black hover:cursor-pointer">Boxers</p>
                            <p className="text-black hover:cursor-pointer">Socks</p>
                            <p className="text-black hover:cursor-pointer">Pajamas</p>
                            <p className="text-black hover:cursor-pointer">Wathces</p>
                            <p className="text-black hover:cursor-pointer">Bracelets</p>
                            <p className="text-black hover:cursor-pointer">Hats</p>
                            <p className="text-black hover:cursor-pointer">Glasses</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style={{ display: `${show3}`, zIndex: '2', position: 'relative' }} id="stuff" className='h-80 bg-white border-t border-slate-200'>
                <div onMouseEnter={() => setdiv3('block')} onMouseLeave={() => setdiv3('none')} className="w-full h-full grid grid-cols-5">
                    <div className="ml-10 mt-5 col-span-1 text-slate-400">Clothes
                        <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-black hover:cursor-pointer">Shirts</p>
                            <p className="text-black hover:cursor-pointer">Jackets</p>
                            <p className="text-black hover:cursor-pointer">Trousers</p>
                            <p className="text-black hover:cursor-pointer">Jeans</p>
                            <p className="text-black hover:cursor-pointer">Shorts</p>
                            <p className="text-black hover:cursor-pointer">Coats</p>
                            <p className="text-black hover:cursor-pointer">Vests</p>
                            <p className="text-black hover:cursor-pointer">Suits</p>
                        </div>
                    </div>
                    <div className="mt-5 ml-10 col-span-1 text-slate-400">Shoes
                        <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-black hover:cursor-pointer">Sneakers</p>
                            <p className="text-black hover:cursor-pointer">Boots</p>
                            <p className="text-black hover:cursor-pointer">Trainers</p>
                            <p className="text-black hover:cursor-pointer">Moccassins</p>
                            <p className="text-black hover:cursor-pointer">Sports shoes</p>
                        </div>
                    </div>
                    <div className="mt-5 ml-10 col-span-1 text-slate-400">Underwear & Accesories
                        <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-black hover:cursor-pointer">Boxers</p>
                            <p className="text-black hover:cursor-pointer">Socks</p>
                            <p className="text-black hover:cursor-pointer">Pajamas</p>
                            <p className="text-black hover:cursor-pointer">Wathces</p>
                            <p className="text-black hover:cursor-pointer">Bracelets</p>
                            <p className="text-black hover:cursor-pointer">Hats</p>
                            <p className="text-black hover:cursor-pointer">Glasses</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style={{ display: `${show4}`, zIndex: '2', position: 'relative' }} id="stuff" className='h-80 bg-white border-t border-slate-200'>
                <div onMouseEnter={() => setdiv4('block')} onMouseLeave={() => setdiv4('none')} className="w-full h-full grid grid-cols-5">
                    <div className="ml-10 mt-5 col-span-1 text-slate-400">Clothes
                        <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-black hover:cursor-pointer">Shirts</p>
                            <p className="text-black hover:cursor-pointer">Jackets</p>
                            <p className="text-black hover:cursor-pointer">Trousers</p>
                            <p className="text-black hover:cursor-pointer">Jeans</p>
                            <p className="text-black hover:cursor-pointer">Shorts</p>
                            <p className="text-black hover:cursor-pointer">Coats</p>
                            <p className="text-black hover:cursor-pointer">Vests</p>
                            <p className="text-black hover:cursor-pointer">Suits</p>
                        </div>
                    </div>
                    <div className="mt-5 ml-10 col-span-1 text-slate-400">Shoes
                        <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-black hover:cursor-pointer">Sneakers</p>
                            <p className="text-black hover:cursor-pointer">Boots</p>
                            <p className="text-black hover:cursor-pointer">Trainers</p>
                            <p className="text-black hover:cursor-pointer">Moccassins</p>
                            <p className="text-black hover:cursor-pointer">Sports shoes</p>
                        </div>
                    </div>
                    <div className="mt-5 ml-10 col-span-1 text-slate-400">Underwear & Accesories
                        <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-black hover:cursor-pointer">Boxers</p>
                            <p className="text-black hover:cursor-pointer">Socks</p>
                            <p className="text-black hover:cursor-pointer">Pajamas</p>
                            <p className="text-black hover:cursor-pointer">Wathces</p>
                            <p className="text-black hover:cursor-pointer">Bracelets</p>
                            <p className="text-black hover:cursor-pointer">Hats</p>
                            <p className="text-black hover:cursor-pointer">Glasses</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style={{ display: `${show5}`, zIndex: '2', position: 'relative' }} id="stuff" className='h-80 bg-white border-t border-slate-200'>
                <div onMouseEnter={() => setdiv5('block')} onMouseLeave={() => setdiv5('none')} className="w-full h-full grid grid-cols-5">
                    <div className="ml-10 mt-5 col-span-1 text-slate-400">Clothes
                        <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-black hover:cursor-pointer">Shirts</p>
                            <p className="text-black hover:cursor-pointer">Jackets</p>
                            <p className="text-black hover:cursor-pointer">Trousers</p>
                            <p className="text-black hover:cursor-pointer">Jeans</p>
                            <p className="text-black hover:cursor-pointer">Shorts</p>
                            <p className="text-black hover:cursor-pointer">Coats</p>
                            <p className="text-black hover:cursor-pointer">Vests</p>
                            <p className="text-black hover:cursor-pointer">Suits</p>
                        </div>
                    </div>
                    <div className="mt-5 ml-10 col-span-1 text-slate-400">Shoes
                        <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-black hover:cursor-pointer">Sneakers</p>
                            <p className="text-black hover:cursor-pointer">Boots</p>
                            <p className="text-black hover:cursor-pointer">Trainers</p>
                            <p className="text-black hover:cursor-pointer">Moccassins</p>
                            <p className="text-black hover:cursor-pointer">Sports shoes</p>
                        </div>
                    </div>
                    <div className="mt-5 ml-10 col-span-1 text-slate-400">Underwear & Accesories
                        <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-black hover:cursor-pointer">Boxers</p>
                            <p className="text-black hover:cursor-pointer">Socks</p>
                            <p className="text-black hover:cursor-pointer">Pajamas</p>
                            <p className="text-black hover:cursor-pointer">Wathces</p>
                            <p className="text-black hover:cursor-pointer">Bracelets</p>
                            <p className="text-black hover:cursor-pointer">Hats</p>
                            <p className="text-black hover:cursor-pointer">Glasses</p>
                        </div>
                    </div>
                </div>
            </div>
               
        </div>
    )
}

export default Eshopnavbar;