import './Backdrop.css';

const Backdrop = ({showSideDrawer, OnClickBtn})=>{

    return showSideDrawer && (
     <div className='backdrop' onClick ={OnClickBtn}> </div>
    )
};

export default Backdrop;