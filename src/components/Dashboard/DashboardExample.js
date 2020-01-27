import React from "react";
import ModalBase from '../modals/Modal-Base'


const DashboardExample = (props) => {
    return (
        <div>
            <h3>Dash</h3>
            <ModalBase onClick={console.log(props.match.params)} id={0}/>
        </div>
    )
}

export default DashboardExample;