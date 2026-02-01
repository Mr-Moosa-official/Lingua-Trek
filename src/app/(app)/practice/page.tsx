"use client";

import { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Mic, Square } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PracticeCardProps {
  phrase: string;
  translation: string;
}

function PracticeCard({ phrase, translation }: PracticeCardProps) {
  const { toast } = useToast();
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioPlaybackRef = useRef<HTMLAudioElement | null>(null);

  const handleRecordToggle = async () => {
    if (isRecording) {
      // Stop recording
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
    } else {
      // Start recording
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        const audioChunks: Blob[] = [];

        mediaRecorder.ondataavailable = (event) => {
          audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioURL(audioUrl);
          stream.getTracks().forEach(track => track.stop()); // Turn off mic indicator
        };

        mediaRecorder.start();
        setIsRecording(true);
      } catch (error) {
        console.error("Error accessing microphone:", error);
        toast({
          variant: "destructive",
          title: "Microphone Access Denied",
          description: "Please enable microphone permissions in your browser settings to record audio.",
        });
      }
    }
  };
  
  const playNativeAudio = () => {
      toast({
          title: "Feature coming soon",
          description: "Native speaker audio playback is not yet implemented.",
      });
  };

  const playUserRecording = () => {
    if (audioURL && audioPlaybackRef.current) {
        audioPlaybackRef.current.src = audioURL;
        audioPlaybackRef.current.play();
    }
  };

  return (
    <Card className="bg-secondary/30">
      <CardHeader>
        <p className="font-semibold text-lg">{phrase}</p>
        <p className="text-sm text-muted-foreground">{translation}</p>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center gap-2">
          <Button onClick={playNativeAudio}>
            <Play className="mr-2 h-4 w-4" />
            Listen
          </Button>
          <div className="text-sm text-muted-foreground">Native Speaker</div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="destructive"
            onClick={handleRecordToggle}
          >
            {isRecording ? (
              <Square className="mr-2 h-4 w-4" />
            ) : (
              <Mic className="mr-2 h-4 w-4" />
            )}
            {isRecording ? "Stop" : "Record"}
          </Button>
          <div className="text-sm text-muted-foreground">Your Turn</div>
        </div>
        {audioURL && (
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={playUserRecording}>
              <Play className="mr-2 h-4 w-4" />
              Your Recording
            </Button>
          </div>
        )}
      </CardContent>
      <audio ref={audioPlaybackRef} className="hidden" />
    </Card>
  );
}


export default function PronunciationPracticePage() {
  const phrases = [
    {
      phrase: "The rain in Spain stays mainly in the plain.",
      translation: "La lluvia en España se queda principalmente en la llanura."
    },
    {
      phrase: "¿Dónde está la biblioteca?",
      translation: "Where is the library?"
    }
  ];
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Record &amp; Compare</CardTitle>
        <CardDescription>
          Practice your pronunciation and compare it with a native speaker.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {phrases.map((p, i) => (
            <PracticeCard key={i} phrase={p.phrase} translation={p.translation} />
        ))}
      </CardContent>
    </Card>
  );
}
