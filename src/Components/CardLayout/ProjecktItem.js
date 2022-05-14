import { Link } from 'react-router-dom';
import Card from './Card'
import classes from './ProjectItem.module.css'
import './button.css'

function ProjectItem(props) {

    return <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className='rounded-full flex justify-center p-5'>
                <Link to={props.link}>
                    <a href="#" class="button">Check this</a>
                </Link>
            </div>
        </Card>
    </li>
}

export default ProjectItem;