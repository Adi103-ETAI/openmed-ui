import { BookOpen, Bookmark, FileText, ChevronRight } from "lucide-react";

const SAVED_ITEMS = [
  { id: 1, title: "Hypertension Guidelines 2026", type: "Guideline", date: "Oct 12" },
  { id: 2, title: "GLP-1 Case Study Analysis", type: "Analysis", date: "Sep 28" },
  { id: 3, title: "Diagnostic Criteria for Long COVID", type: "Reference", date: "Aug 15" },
];

const Vault = () => {
  return (
    <div className="w-full max-w-[860px] mx-auto py-12 px-4 sm:px-8 animate-fade-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/10 rounded-xl text-primary">
          <BookOpen className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-heading font-bold tracking-tight text-foreground">Research Vault</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SAVED_ITEMS.map((item) => (
          <button
            key={item.id}
            className="flex flex-col items-start p-5 bg-surface-container-high border border-border/50 rounded-2xl text-left hover:border-primary/50 hover:bg-muted/30 transition-all group"
          >
            <div className="flex items-center justify-between w-full mb-3">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-muted-foreground">
                {item.type}
              </span>
              <Bookmark className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-base font-semibold text-foreground line-clamp-2 leading-snug mb-4">
              {item.title}
            </h3>
            <div className="flex items-center justify-between w-full mt-auto">
              <span className="text-xs text-muted-foreground/80">{item.date}</span>
              <div className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                View <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-12 p-8 bg-surface-container-low border border-border/50 rounded-2xl flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
          <FileText className="w-6 h-6 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-1">Upload Documents</h3>
        <p className="text-sm text-muted-foreground max-w-sm">Securely store your clinical documents and notes for instant AI retrieval.</p>
        <button className="mt-6 px-6 py-2.5 bg-primary/10 text-primary font-medium rounded-lg hover:bg-primary/20 transition-colors">
          Browse Files
        </button>
      </div>
    </div>
  );
};

export default Vault;
