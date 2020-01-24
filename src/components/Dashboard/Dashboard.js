import React, {useState} from "react"

const Dashboard = () => {
    const [open, setOpen] = useState(false)

    const Toggled = () => {
        setOpen(open => !open)
    }
    
    return (
        <div>
            <button onClick={Toggled}>Open</button>
            <div>{open && <h3>Testing Modal</h3>}</div>
           
        </div>
    )
}

export default Dashboard;