export interface Node {
  id: string;
  type?: string;
  data?: any;
  position?: { x: number; y: number };
}

export interface Edge {
  id: string;
  source: string;
  target: string;
  type?: string;
}

export interface ReadonlyEditorProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export declare const ReadonlyEditor: React.FC<ReadonlyEditorProps>;
export declare const generateAIRoadmapFromText: (text: string) => Promise<{ nodes: Node[]; edges: Edge[] }>;
export declare const renderFlowJSON: (json: any) => any;