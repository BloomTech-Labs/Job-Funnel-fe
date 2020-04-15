import React,{ useState } from 'react';


// //This component is the left side navigation on the desktop display site. 
export const Leftnav = () => {
  const [search, setSearch] = useState({search: ""});

 const handleChange = event => {
     setSearch({...search, [event.target.name]: event.target.value });
};
 const handleSubmit = event => {
      event.preventDefault();
    }

    return (
        <div className="left-nav-container">

        </div>

    )
 }

