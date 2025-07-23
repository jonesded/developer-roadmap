// Stub exports for @roadmapsh/editor
const ReadonlyEditor = ({ children, ...props }) => children;
const generateAIRoadmapFromText = async () => ({ nodes: [], edges: [] });
const renderFlowJSON = () => null;

// Type exports
const Node = {};
const Edge = {};

export { Edge, Node, ReadonlyEditor, generateAIRoadmapFromText, renderFlowJSON };
