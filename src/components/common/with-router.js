import { Component } from "react";
import { useNavigate , useParams } from "react-router-dom";

export const withRouter = (Component) => {
    function ComponentWithRouterProps(props) {
        let navigate = useNavigate()
        let params = useParams()
        return <Component {...props} router={{navigate , params}} /> //... คือ เลือกทั้งหมด
    }
    return ComponentWithRouterProps 
}