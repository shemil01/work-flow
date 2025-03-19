import React from "react";
import { useWorkflow } from "./context/WorkFlowContext";

const NodeProperties = () => {
    const { nodes, setNodes, selectedNode } = useWorkflow();

    if (!selectedNode) return <p>Select a node to edit properties.</p>;

    const handleChange = (e) => {
        const { value } = e.target;
        setNodes((prevNodes) =>
            prevNodes.map((node) =>
                node.id === selectedNode.id ? { ...node, data: { ...node.data, label: value } } : node
            )
        );
    };

    return (
        <div className="sidebar">
            <h3>Node Properties</h3>
            <input
                type="text"
                value={selectedNode.data.label}
                onChange={handleChange}
            />
        </div>
    );
};

export default NodeProperties;
