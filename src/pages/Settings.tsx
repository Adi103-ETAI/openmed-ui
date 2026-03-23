import { Settings2, Bell, Shield, Moon, Monitor, CreditCard, ChevronRight } from "lucide-react";

const Settings = () => {
  return (
    <div className="w-full max-w-[860px] mx-auto py-12 px-4 sm:px-8 animate-fade-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/10 rounded-xl text-primary">
          <Settings2 className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-heading font-bold tracking-tight text-foreground">Settings</h1>
      </div>

      <div className="space-y-6">
        {/* Profile Card */}
        <div className="p-6 bg-surface-container-high border border-border/50 rounded-2xl">
          <h2 className="text-lg font-semibold text-foreground mb-4">Profile Information</h2>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-inner">
              DA
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Director A</h3>
              <p className="text-sm text-muted-foreground mb-3">director@sentarc.labs</p>
              <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted/50 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Preferences Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Notifications */}
          <div className="p-6 bg-surface-container-low border border-border/50 rounded-2xl space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Bell className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Notifications</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">New Guidance Alerts</p>
                <p className="text-xs text-muted-foreground">Receive ICMR updates</p>
              </div>
              <div className="w-10 h-6 bg-primary rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-primary-foreground rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Weekly Digest</p>
                <p className="text-xs text-muted-foreground">Summary of your queries</p>
              </div>
              <div className="w-10 h-6 bg-muted rounded-full relative cursor-pointer border border-border/50">
                <div className="absolute left-1 top-1 w-4 h-4 bg-muted-foreground rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div className="p-6 bg-surface-container-low border border-border/50 rounded-2xl space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Monitor className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Appearance</h3>
            </div>
            <div className="flex items-center justify-between p-3 border border-primary/50 bg-primary/5 rounded-xl cursor-pointer">
              <div className="flex items-center gap-3">
                <Moon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Dark Theme</span>
              </div>
              <div className="w-4 h-4 rounded-full border-4 border-primary"></div>
            </div>
            <div className="flex items-center justify-between p-3 border border-border/50 rounded-xl hover:bg-muted/30 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <Monitor className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-medium">System Default</span>
              </div>
              <div className="w-4 h-4 rounded-full border-2 border-muted-foreground"></div>
            </div>
          </div>
        </div>

        {/* Security / Billing */}
        <div className="grid gap-6 md:grid-cols-2">
          <button className="flex items-center justify-between p-5 bg-surface-container-low border border-border/50 rounded-2xl hover:border-primary/30 hover:bg-muted/30 transition-all text-left">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-muted rounded-lg"><Shield className="w-5 h-5 text-foreground" /></div>
              <div>
                <h4 className="font-semibold text-sm">Security</h4>
                <p className="text-xs text-muted-foreground">Password, 2FA</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="flex items-center justify-between p-5 bg-surface-container-low border border-border/50 rounded-2xl hover:border-primary/30 hover:bg-muted/30 transition-all text-left">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-muted rounded-lg"><CreditCard className="w-5 h-5 text-foreground" /></div>
              <div>
                <h4 className="font-semibold text-sm">Subscription</h4>
                <p className="text-xs text-muted-foreground">Manage your plan</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
