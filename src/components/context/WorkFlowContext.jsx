import React, { createContext, useContext, useState } from "react";

const WorkflowContext = createContext();

export const useWorkflow = () => useContext(WorkflowContext);

export const WorkflowProvider = ({ children }) => {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const [selectedNode, setSelectedNode] = useState(null);

    return (
        <WorkflowContext.Provider value={{ nodes, setNodes, edges, setEdges, selectedNode, setSelectedNode }}>
            {children}
        </WorkflowContext.Provider>
    );
};
