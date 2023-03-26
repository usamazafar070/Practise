import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import Codentire from './Codentire';
import { BrowserRouter } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Codentire/>
    </BrowserRouter>
);