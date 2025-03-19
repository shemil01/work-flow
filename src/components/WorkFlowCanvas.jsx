import React from "react";
import ReactFlow, { MiniMap, Controls, Background, addEdge, Handle } from "reactflow";
import "reactflow/dist/style.css";
import { useWorkflow } from "../components/context/WorkFlowContext";

const CustomNode = ({ id, data }) => {
    const { setNodes, setSelectedNode } = useWorkflow();

    const removeNode = () => {
        setNodes((nodes) => nodes.filter((node) => node.id !== id));
    };

    return (
        <div className="custom-node" onClick={() => setSelectedNode({ id, data })}>
            <input
                type="text"
                value={data.label}
                onChange={(e) =>
                    setNodes((nodes) =>
                        nodes.map((node) =>
                            node.id === id ? { ...node, data: { ...node.data, label: e.target.value } } : node
                        )
                    )
                }
            />
            <button onClick={removeNode} className="delete-btn">❌</button>

            <Handle type="source" position="right" />
            <Handle type="target" position="left" />
        </div>
    );
};

const nodeTypes = { custom: CustomNode };

const WorkflowCanvas = () => {
    const { nodes, setNodes, edges, setEdges, setSelectedNode } = useWorkflow();

    const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

    const onDrop = (event) => {
        event.preventDefault();
        const nodeType = event.dataTransfer.getData("application/reactflow");
        if (!nodeType) return;

        const newNode = {
            id: `${+new Date()}`,
            type: "custom",
            position: { x: event.clientX - 200, y: event.clientY - 100 },
            data: { label: nodeType },
            draggable: true,
        };

        setNodes((nds) => [...nds, newNode]);
    };

    return (
        <div
            className="canvas"
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
        >
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes} 
                onConnect={onConnect}
                onNodeClick={(e, node) => setSelectedNode(node)}
                onNodeDragStop={(event, node) => {
                    setNodes((nds) =>
                        nds.map((n) => (n.id === node.id ? { ...n, position: node.position } : n))
                    );
                }}
            >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
};

export default WorkflowCanvas;
