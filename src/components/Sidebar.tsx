import { Clock, BookOpen, Settings, LayoutDashboard, PanelLeftClose, PanelLeftOpen, Hexagon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const HISTORY = [
  { id: 1, title: "GLP-1 CKD Analysis", category: "Endocrinology", time: "2h ago" },
  { id: 2, title: "Atrial Fibrillation Post-Op", category: "Cardiology", time: "5h ago" },
  { id: 3, title: "Refractory Hypertension", category: "Cardiology", time: "1d ago" },
];

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className={`h-screen flex flex-col bg-surface-container-low border-r border-border/50 transition-all duration-300 shrink-0 ${isOpen ? 'w-[260px]' : 'w-[68px]'}`}>
      
      {/* Top Toggle Area */}
      <div className={`h-[60px] border-b border-border/30 shrink-0 flex items-center ${isOpen ? 'px-4 justify-between' : 'justify-center'}`}>
        {isOpen ? (
          <>
            {/* Logo (Left, Non-clickable or directs to home) */}
            <div className="w-10 h-10 flex shrink-0 items-center justify-center">
              <Hexagon className="w-5 h-5 text-primary fill-primary/20" />
            </div>

            {/* Collapse Button (Right) */}
            <button 
              onClick={toggleSidebar}
              title="Close Sidebar"
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
            >
              <PanelLeftClose className="w-5 h-5" />
            </button>
          </>
        ) : (
          /* Closed State: Hover Interaction */
          <div 
            className="group relative w-10 h-10 flex shrink-0 items-center justify-center rounded-xl cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={toggleSidebar}
            title="Open Sidebar"
          >
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 opacity-100 group-hover:opacity-0">
              <Hexagon className="w-5 h-5 text-primary fill-primary/20" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 opacity-0 group-hover:opacity-100">
              <PanelLeftOpen className="w-5 h-5 text-foreground" />
            </div>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-x-hidden overflow-y-auto py-4 flex flex-col gap-2 custom-scrollbar">
        {/* Main Nav */}
        <div className="px-3 flex flex-col gap-1.5">
          <Link
            title="New Consultation"
            to="/"
            className={`flex items-center gap-3 p-2.5 rounded-xl text-sm font-medium transition-colors ${
              isActive("/") ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            }`}
          >
            <LayoutDashboard className="w-5 h-5 shrink-0" />
            <span className={`transition-opacity duration-200 whitespace-nowrap ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>New Consultation</span>
          </Link>
          <Link
            title="Research Vault"
            to="/vault"
            className={`flex items-center gap-3 p-2.5 rounded-xl text-sm font-medium transition-colors ${
              isActive("/vault") ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            }`}
          >
            <BookOpen className="w-5 h-5 shrink-0" />
            <span className={`transition-opacity duration-200 whitespace-nowrap ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>Research Vault</span>
          </Link>
        </div>

        {/* History Area */}
        <div className={`mt-6 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <h4 className="px-5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" /> Recent Queries
          </h4>
          <div className="px-2 space-y-0.5">
            {HISTORY.map((item) => (
              <button
                key={item.id}
                onClick={() => console.log('Mock: load query', item.id)}
                className="w-full flex flex-col items-start px-3 py-2 rounded-lg text-left transition-colors hover:bg-muted/50 group"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {item.title}
                </span>
                <div className="flex items-center justify-between w-full mt-1">
                  <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-muted-foreground/70">{item.time}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Footer Settings */}
      <div className="p-3 border-t border-border/30">
        <Link
          title="Settings"
          to="/settings"
          className={`flex items-center gap-3 p-2.5 rounded-xl text-sm font-medium transition-colors ${
            isActive("/settings") ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
          }`}
        >
          <Settings className="w-5 h-5 shrink-0" />
          <span className={`transition-opacity duration-200 whitespace-nowrap ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>Settings</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
