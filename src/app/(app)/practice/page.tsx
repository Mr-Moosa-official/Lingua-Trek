import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Mic, Square } from "lucide-react";

// This is a mock component. In a real application, you'd use a state management
// library and the browser's MediaRecorder API.
function PracticeCard() {
  const phrase = "The rain in Spain stays mainly in the plain.";
  const translation = "La lluvia en España se queda principalmente en la llanura.";

  return (
    <Card className="bg-secondary/30">
      <CardHeader>
        <p className="font-semibold text-lg">{phrase}</p>
        <p className="text-sm text-muted-foreground">{translation}</p>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center gap-2">
          <Button>
            <Play className="mr-2 h-4 w-4" />
            Listen
          </Button>
          <div className="text-sm text-muted-foreground">Native Speaker</div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="destructive">
            <Mic className="mr-2 h-4 w-4" />
            Record
          </Button>
          <div className="text-sm text-muted-foreground">Your Turn</div>
        </div>
      </CardContent>
    </Card>
  );
}


export default function PronunciationPracticePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Record & Compare</CardTitle>
        <CardDescription>
          Practice your pronunciation and compare it with a native speaker.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <PracticeCard />
        <Card className="bg-secondary/30">
          <CardHeader>
            <p className="font-semibold text-lg">¿Donde está la biblioteca?</p>
            <p className="text-sm text-muted-foreground">Where is the library?</p>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <Button>
                <Play className="mr-2 h-4 w-4" />
                Listen
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Play className="mr-2 h-4 w-4" />
                Your Recording
              </Button>
            </div>
             <div className="flex items-center gap-2">
              <Button variant="destructive" disabled>
                <Square className="mr-2 h-4 w-4" />
                Recording...
              </Button>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
