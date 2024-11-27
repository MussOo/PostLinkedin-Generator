import Image from "next/image";
import { Card } from "@/components/ui/card";

interface ImageDisplayProps {
  imageUrl: string;
}

export function ImageDisplay({ imageUrl }: ImageDisplayProps) {
  if (!imageUrl) return null;

  return (
    <Card className="p-4">
      <div className="relative aspect-square w-full max-w-2xl mx-auto">
        <Image
          src={imageUrl}
          alt="Generated technical illustration"
          fill
          className="object-contain rounded-lg"
        />
      </div>
    </Card>
  );
}