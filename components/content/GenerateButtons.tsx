"use client";

import { Button } from "@/components/ui/button";
import { Loader2, RefreshCw, Image as ImageIcon } from "lucide-react";

interface GenerateButtonsProps {
  isGenerating: boolean;
  isGeneratingImage: boolean;
  onGenerateContent: () => void;
  onGenerateImage: () => void;
}

export function GenerateButtons({
  isGenerating,
  isGeneratingImage,
  onGenerateContent,
  onGenerateImage,
}: GenerateButtonsProps) {
  return (
    <div className="flex gap-4 justify-center">
      <Button
        onClick={onGenerateContent}
        disabled={isGenerating}
        className="w-48"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <RefreshCw className="mr-2 h-4 w-4" />
            Generate Content
          </>
        )}
      </Button>
      
      <Button
        onClick={onGenerateImage}
        disabled={isGeneratingImage}
        variant="outline"
        className="w-48"
      >
        {isGeneratingImage ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating Image...
          </>
        ) : (
          <>
            <ImageIcon className="mr-2 h-4 w-4" />
            Generate Image
          </>
        )}
      </Button>
    </div>
  );
}