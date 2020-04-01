import React, { createContext, useReducer } from "react";
import { node } from 'prop-types'

//create initinal payload
const users = [
    {
        name: "Didem",
        title: "Frontend Developer"
    },
    {
        name: "Aleyna",
        title: "Mechanical Engineer"
    }
]

//create context
export const MainContext = createContext(users);