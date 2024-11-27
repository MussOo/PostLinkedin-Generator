import { Card } from "@/components/ui/card";

export function PageHeader() {
  return (
    <Card className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-none">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          LinkedIn Tech Content Generator
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Create engaging technical content for your LinkedIn profile using AI. Generate professional posts and illustrations to share your expertise.
        </p>
      </div>
    </Card>
  );
}