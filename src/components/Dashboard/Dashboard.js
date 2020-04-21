import React from "react";
import { Route, useLocation } from "react-router-dom";
import DashboardNav from "./DashboardNav.js";
import { Leftnav } from "./Leftnav.js";
import SavedJobs from "./Jobs/SavedJobs.js";
import SuggestedJobs from "./Jobs/SuggestedJobs.js";
import { RightNav } from "./RightNav.js";
import AppliedJobs from "./Jobs/AppliedJobs";

export default function Dashboard() {
  return (
    <>
      <div id="dash">
        <div className="div1">
          <Route exact path="/Dashboard" component={SuggestedJobs} />
        </div>

        <RightNav />
      </div>
    </>
  );
}
