import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Courses</CardTitle>
          <CardDescription>
            Explore our comprehensive list of language and culture courses.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center text-center gap-4 h-96">
            <div className="bg-secondary p-6 rounded-full">
                <BookOpen className="h-12 w-12 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">More Courses Coming Soon!</h3>
            <p className="text-muted-foreground">We are busy curating new learning experiences for you. Check back later!</p>
        </CardContent>
      </Card>
    </div>
  );
}
