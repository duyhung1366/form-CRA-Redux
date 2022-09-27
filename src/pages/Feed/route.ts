import { lazy } from "react";

export default {
    path:'/feed', 
    exact: true, 
    public: true, 
    component: lazy(()=> import(".")),
}