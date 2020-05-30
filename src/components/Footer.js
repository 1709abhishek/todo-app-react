import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const Footer = () => (
    <div className="sides">
        {/* <span>Show: </span> */}
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            <div className="menus">Today's Task</div>
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            <div className="menus">Pending Tasks</div>
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            <div className="menus">Completed Tasks</div>
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_INPROGRESS}>
            <div className="menus">Tasks In Progress</div>
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ABANDON}>
            <div className="menus">Abandoned Tasks</div>
        </FilterLink>
    </div>
);

export default Footer;
