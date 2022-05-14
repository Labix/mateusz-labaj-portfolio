import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Nav from "./Nav";

const Contact = () =>{

    const [Phone, setPhone] = useState(false);
    const showPhone =()=> {
        setPhone(!Phone);
    }

    const [Email, setEmail] = useState(false);
    const showEmail = () =>{
        setEmail(!Email);
    }

    return(
        <div className="">
          
        <Nav/>
            
            <div className="flex mt-10 flex-col items-center gap-8">
                <h1 className="text-3xl">Contact</h1>
            <p className="text-center">If you are interested in my services, please choose one of the options below</p>
            </div>
            
            <div className="mt-36 md:mt-5 flex flex-col gap-10 md:flex-row justify-center md:justify-around md:ml-40 md:mr-40 h-96 items-center">
                <div className="mt-16 md:mt-0 shadow-lg flex flex-col items-center w-52 md:w-wcard h-hcard rounded-lg border border-inherit transfrom hover:scale-125 hover:transition ease-out duration-500">
                    <div className="absolute rounded-t-lg h-2 w-52 md:static md:w-full bg-blue-500"></div>
                    <h1 className="text-lg font-bold mt-10 uppercase">Email</h1>
                    <p className="text-slate-500 text-sm mr-5 ml-5 mt-5 flex-wrap text-center">If you are interested in my services, please choose one of the options below</p>
                    <p className="">{Email ? <Phonenumber2/>: null}</p>
                    <button onClick={showEmail} className="md:absolute w-48 md:w-52 border mb-12 md:mb-0 md:mt-56 mt-8 text-l bg-transparent cursor-pointer hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-blue-500 hover:border-transparent rounded-full">Show email</button>
                </div>
                <div className="shadow-lg flex flex-col items-center w-52 md:w-wcard h-hcard rounded-lg border border-inherit transfrom hover:scale-125 hover:transition ease-out duration-500">
                    <div className="absolute rounded-t-lg h-2 w-52 md:static md:w-full bg-green-500"></div>
                    <h1 className="text-lg font-bold mt-10 uppercase">Phone number</h1>
                    <p className="text-slate-500 text-sm mr-5 ml-5 mt-5 flex-wrap text-center">If you are interested in my services, please choose one of the options below</p>
                    <p className="">{Phone ? <Phonenumber /> : null}</p>
                    <button onClick={showPhone} className="md:absolute w-48 md:w-52 border mb-12 md:mb-0 mt-8 md:mt-56 text-l bg-transparent cursor-pointer hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border-green-500 hover:border-transparent rounded-full">Show phone number</button>
                    
                </div>
                
            </div>
            </div>

        

        

        
    );
}

const Phonenumber = () => <p className="mt-5 transition-all">797956155</p>;
const Phonenumber2 = () => <p className="mt-5">mateuszlabaj.dev@gmail.com</p>;

export default Contact;