import { FilePlus2, FolderOpen, Search, ListChecks, Ruler, MessageSquareText, Bot, Settings } from "lucide-react";

const tools=[
  ["Drawing Sets","Organize sheets, labels, bookmarks and revisions",FolderOpen],
  ["QA / QC","Inspect drawing sets for coordination issues",ListChecks],
  ["Markups","Engineering review comments and markup workflows",MessageSquareText],
  ["Takeoffs","Lengths, areas, counts and quantity organization",Ruler],
  ["AI Review","Ask questions and generate review findings",Bot],
];

export default function App(){
 return <div className="shell">
  <header><div><b>WRE</b><span> Revu Assistant</span></div><nav><button><FilePlus2/>New</button><button><FolderOpen/>Open PDF</button></nav><button className="icon"><Settings/></button></header>
  <div className="workspace">
   <aside><div className="section-title">WORKSPACE</div>{tools.map(([name,desc,Icon]:any)=><button className="tool" key={name}><Icon/><span><strong>{name}</strong><small>{desc}</small></span></button>)}</aside>
   <main><div className="empty"><div className="logo">WRE</div><h1>Revu Assistant</h1><p>Open an engineering drawing set to begin review.</p><button className="primary"><FolderOpen/>Open PDF Drawing Set</button><div className="search"><Search/><span>Drawing search and AI document review will appear here.</span></div></div></main>
   <aside className="right"><div className="section-title">DOCUMENT</div><div className="panel">No document open</div><div className="section-title">REVIEW STATUS</div><div className="stats"><span>Open Issues <b>0</b></span><span>Resolved <b>0</b></span><span>Sheets <b>0</b></span></div></aside>
  </div>
  <footer><span>Ready</span><span>B01 Foundation · v0.1.0</span></footer>
 </div>
}