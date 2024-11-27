"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContentDisplayProps {
  content: string;
}

export function ContentDisplay({ content }: ContentDisplayProps) {
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      toast({
        title: "Copied!",
        description: "Content copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy content",
        variant: "destructive",
      });
    }
  };

  if (!content) return null;

  return (
    <Card className="p-6 relative">
      <Button
        onClick={copyToClipboard}
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2"
      >
        <Copy className="h-4 w-4" />
      </Button>
      <div className="prose dark:prose-invert max-w-none">
        <p className="whitespace-pre-wrap">{content}</p>
      </div>
    </Card>
  );
}