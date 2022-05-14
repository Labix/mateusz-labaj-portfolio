import React from "react";

import ProjectItemList from "./CardLayout/ProjectItemList";
import Layout from "./CardLayout/Layout";
import Nav from "./Nav";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'Ecommerce',
        image: 'https://i.imgur.com/ldwRGZq.png',
        description: 'Online shop web page',
        link: '/eshop'
    },
    {
        id: 'm2',
        title: 'Snake game',
        image: 'https://i.imgur.com/61Y3uwp.png',
        description: 'Classic game known from Nokia 3310',
        link:'/snake'
    }
];

const Projects = () =>{
    return(
        <div>
        <Nav/>
        <Layout>
            <section>
                <ProjectItemList meetups = {DUMMY_DATA}/>
            </section>
        </Layout>
        </div>
    );
}

export default Projects;