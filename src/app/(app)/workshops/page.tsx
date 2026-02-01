import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react";

export default function WorkshopsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Workshops</CardTitle>
          <CardDescription>
            Join our interactive workshops led by industry experts.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center text-center gap-4 h-96">
             <div className="bg-secondary p-6 rounded-full">
                <Users className="h-12 w-12 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Upcoming Workshops Schedule</h3>
            <p className="text-muted-foreground">We are finalizing our next set of workshops. Stay tuned for announcements!</p>
        </CardContent>
      </Card>
    </div>
  );
}
