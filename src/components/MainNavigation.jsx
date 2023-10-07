import { Link,NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css'
const MainNavigation = ()=>{
    return <>
    <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li><NavLink to='/' className={({isActive})=>{
                    return isActive?classes.active:undefined
                }}>Home</NavLink></li>
                <li><Link to='/products' className={({isActive})=>{
                        return isActive?classes.active:undefined
                }}>Product</Link></li>
            </ul>
        </nav>
        
        
    </header></>
}

export default MainNavigation;