import React from "react";
import Sidebar from "./components/Sidebar";
import WorkflowCanvas from "./components/WorkFlowCanvas";
import { WorkflowProvider } from "./components/context/WorkFlowContext";
import './App.css'
import NodeProperties from "./components/NodeProperties";


const App = () => {
    return (
        <WorkflowProvider>
            <div className="app">
                <Sidebar />
                <WorkflowCanvas />
                <NodeProperties/>
            </div>
        </WorkflowProvider>
    );
};

export default App;
