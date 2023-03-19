import { Fragment } from "react";
import MainNavigation from './main-navigation';

//this component is u can say a wrapper that will contain navigation and logo and we will pass it to app file
// when u pass Layout in app anything between those layout tags will be props(children). dont need to pass khud pas hojaengy
function Layout(props){
    return (
    <Fragment>
        {/* Note: in this comp mainnavigation in on top bcz it contains navifation bar. then props.children bcz everypage data will be after it.
        if we send main navigation to end then after all data navigation will be shown at bottom */}
        <MainNavigation />
        {/* main is a html element for wrapping anything main in body
        props.children when u want an element to wrap some other elements . all ineer will be children. */}
        <main>{props.children}</main>
    </Fragment>
    )
}

export default Layout;
