import ProjectItem from './ProjecktItem';
import classes from './ProjectItemList.module.css';

function ProjectItemList(props) {
    return <ul className={classes.list}>
        {props.meetups.map((meetup) => (
            <ProjectItem
                key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
                description={meetup.description}
                link={meetup.link} />))}
    </ul>
}

export default ProjectItemList;