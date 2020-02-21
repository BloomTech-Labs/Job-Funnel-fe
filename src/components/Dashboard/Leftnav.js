// import React,{ useState } from 'react';


// //This component is the left side navigation on the desktop display site. 
// const Leftnav = () => {
//     const [search, setSearch] = useState({search: ""});
    
//     const handleChange = event => {
//         setSearch({...search, [event.target.name]: event.target.value });
//     };

//     const handleSubmit = event => {
//         event.preventDefault();
//     }

//     return (
//         <div className="left-nav-container">
//             <h1>Filters and Search</h1>
//             <div className="filter-class-left">
//             <div>
//             <form onSubmit={event => handleSubmit(event)}>
//                 <label>
//                     <input className="search-bar-left"
//                         type="text"
//                         name="search"
//                         placeholder="Search for Jobs"
//                         onChange={event => handleChange(event)}/>
//                 </label>
//             </form>
//             </div>
//             <div>
//                 <select className="job-select-left">
//                     <option value={"Job Type"}>Job Type</option>
//                     <option value={"Full Time"}>Full Time</option>
//                     <option value={"Part Time"}>Part Time</option>
//                     <option value={"Contract"}>Contract</option>
//                 </select>
//                 </div>
//                 <div>
//                 <select className="experience-select-left">
//                     <option value={"Experience"}>Experience</option>
//                     <option value={"Junior Position"}>Junior</option>
//                     <option value={"Mid-Level Position"}>Mid-Level</option>
//                     <option value={"Senior Position"}>Senior</option>
//                 </select>
//                 </div>
//                 <div>
//             <form onSubmit={event => handleSubmit(event)}>
//                 <button className="button-left">Search!</button>
//             </form>
//             </div>
//         </div>
//         </div>
        
//     )
// }

// export default Leftnav;