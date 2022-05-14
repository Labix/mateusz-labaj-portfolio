import React from "react";
import Nav from "./Nav";

const Home = () => {

    return(
        <div className="h-screen">
       <div style={{height:'6%'}} className=''>
        <Nav/>
        </div>
        <div style={{height:'94%'}} className="">
            
                <div className="hidden md:grid md:grid-cols-3 h-full w-full ">
                    <div className=" md:col-span-2 md:flex md:justify-center md:items-center text-xD h-full">
                        <div className="">
                            <h1 className="mb-20 ml-36 flex text-6xl font-extrabold text-transform: uppercase">Hey, my name is<p className=' ml-2 text-imie'>Mateusz Labaj!</p></h1>
                            <div className=" md:flex md:justify-center mt-5">
                                <p className="mb-10 ml-20 text-xD text-xl flex-wrap text-center font-Raleway"> I'm a frontend web developer with a bit of experience which you can see in 'Projects' tab. If you want to have a good and cheap website, I am the best choice.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" md:flex h-full justify-center items-center">
                        <img src={require('./ja.jpg')} className='rounded-full h-80 w-80' />
                    </div>
                    
                </div>
                <div className="flex justify-center flex-col items-center md:hidden">
                    <h1 className="mt-10 text-center text-4xl font-extrabold text-transform: uppercase">Hey, my name is<p className='text-center text-imie'>Mateusz Labaj!</p></h1>
                <div className="mt-10">
                        <p className="text-center text-xD text-lg font-Raleway"> I'm a frontend web developer with a bit of experience which you can see in 'Projects' tab. If you want to have a good and cheap website, I am the best choice.</p>
                </div>
                    <div className="mt-10">
                        <img src={require('./ja.jpg')} className='rounded-full h-56 w-56' />
                    </div>
                </div>
        </div>
        </div>
    );

}

export default Home;