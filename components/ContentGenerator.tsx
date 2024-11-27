"use client";

import { useState } from "react";
import { GenerateButtons } from "./content/GenerateButtons";
import { ContentDisplay } from "./content/ContentDisplay";
import { ImageDisplay } from "./content/ImageDisplay";
import { getRandomTopic } from "@/lib/topics";
import { generateContent, generateImage } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { getRandomImagePrompt } from "@/lib/utils/content";

export default function ContentGenerator() {
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const { toast } = useToast();

  const handleGenerateContent = async () => {
    try {
      setIsGenerating(true);
      const topic = getRandomTopic();
      const data = await generateContent(topic);
      setContent(data.content);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateImage = async () => {
    try {
      setIsGeneratingImage(true);
      const prompt = getRandomImagePrompt();
      const data = await generateImage(prompt);
      setImageUrl(data.imageUrl);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingImage(false);
    }
  };

  return (
    <div className="space-y-6">
      <GenerateButtons
        isGenerating={isGenerating}
        isGeneratingImage={isGeneratingImage}
        onGenerateContent={handleGenerateContent}
        onGenerateImage={handleGenerateImage}
      />
      <ContentDisplay content={content} />
      <ImageDisplay imageUrl={imageUrl} />
    </div>
  );
}