import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/PageHeader";
import ContentGenerator from "@/components/ContentGenerator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <PageHeader />
          <Card className="p-6">
            <ContentGenerator />
          </Card>
        </div>
      </main>
    </div>
  );
}