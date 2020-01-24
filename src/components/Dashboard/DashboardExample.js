import React from "react";
import ModalProfessional from '../modals/Modal-Profesional'
import ModalProfile from '../modals/Modal-Profile'
import ModalJobPref from '../modals/Modal-JobPref'


const DashboardExample = () => {
    return (
        <div>
            <h3>Dash</h3>
            <ModalProfessional/>
            <ModalProfile/>
            <ModalJobPref/>
        </div>
    )
}

export default DashboardExample;