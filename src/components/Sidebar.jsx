import React, { useState } from "react";

const nodeTypes = [
  { id: "start", label: "Start", color: "green" },
  { id: "process", label: "Process", color: "blue" },
  { id: "decision", label: "Decision", color: "black" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="toggle-btn">
        ☰ Menu
      </button>
      <div className="sidebar-content">
        <p>Drag a Node</p>

        {nodeTypes.map((node) => (
          <div
            draggable
            onDragStart={(e) =>
              e.dataTransfer.setData("application/reactflow", `${node.label}`)
            }
            className="draggable-node"
            style={{
              backgroundColor: `${node.color}`,
            }}
          >
            {node.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
