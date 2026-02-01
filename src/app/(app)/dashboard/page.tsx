import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, BookOpen, Calendar, Star, Users } from "lucide-react";

// Placeholder data - in a real app, this would come from an API
const featuredCourses = [
  {
    id: "1",
    title: "Conversational Spanish for Beginners",
    category: "Spanish",
    imageUrl: "https://picsum.photos/seed/course1/600/400",
    imageHint: "language book",
    lessons: 24,
    hours: 10,
  },
  {
    id: "2",
    title: "Mastering French Pronunciation",
    category: "French",
    imageUrl: "https://picsum.photos/seed/course2/600/400",
    imageHint: "people talking",
    lessons: 18,
    hours: 8,
  },
  {
    id: "3",
    title: "Japanese for Travelers",
    category: "Japanese",
    imageUrl: "https://picsum.photos/seed/course3/600/400",
    imageHint: "writing notebook",
    lessons: 12,
    hours: 5,
  },
];

const upcomingWorkshops = [
  {
    id: "1",
    title: "Cultural Etiquette in East Asia",
    date: "2024-08-15T14:00:00Z",
    imageUrl: "https://picsum.photos/seed/workshop1/600/400",
    imageHint: "workshop group",
  },
  {
    id: "2",
    title: "Advanced Negotiation in German",
    date: "2024-09-02T10:00:00Z",
    imageUrl: "https://picsum.photos/seed/workshop2/600/400",
    imageHint: "presentation audience",
  },
];

const testimonials = [
  {
    id: "1",
    name: "Alex Johnson",
    avatarUrl: "https://picsum.photos/seed/student1/100/100",
    imageHint: "smiling student",
    text: "LinguaTrek transformed my travel experiences. I can now confidently navigate new countries and connect with locals. The courses are engaging and incredibly effective!",
  },
  {
    id: "2",
    name: "Samantha Lee",
    avatarUrl: "https://picsum.photos/seed/student2/100/100",
    imageHint: "person thinking",
    text: "The workshops are fantastic. I attended the one on business etiquette and it gave me a huge advantage in my international career. Highly recommended.",
  },
  {
    id: "3",
    name: "Carlos Rodriguez",
    avatarUrl: "https://picsum.photos/seed/student3/100/100",
    imageHint: "happy person",
    text: "I've tried many language apps, but LinguaTrek's focus on culture and practical conversation is a game-changer. I finally feel like I'm not just learning words, but truly understanding a new way of life.",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Welcome back, Learner!</h2>
          <p className="text-muted-foreground">Here's a snapshot of your journey with LinguaTrek.</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2 bg-secondary/30">
          <CardHeader>
            <CardTitle>Continue Your Journey</CardTitle>
            <CardDescription>You're doing great! Pick up where you left off.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Conversational Spanish for Beginners</h3>
                    <p className="text-sm text-muted-foreground">65% Complete</p>
                </div>
                <Progress value={65} />
             </div>
             <p className="text-sm text-muted-foreground">You've mastered the basics of greetings. Next up: ordering food and drinks!</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
                <Link href="/dialogues">
                    Jump Back In <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="bg-secondary/30">
            <CardHeader>
                <CardTitle>Streak</CardTitle>
                <CardDescription>Keep the flame alive!</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-2">
                <div className="text-6xl font-bold text-primary">12</div>
                <p className="text-muted-foreground">Days in a row</p>
            </CardContent>
        </Card>
      </div>

      <section>
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold tracking-tight">Featured Courses</h3>
            <Button variant="ghost" asChild>
                <Link href="/courses">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map(course => (
                 <Card key={course.id} className="overflow-hidden hover:shadow-primary/20 hover:shadow-lg transition-shadow border-border">
                    <Image
                        alt={course.title}
                        className="aspect-[3/2] w-full object-cover"
                        height="400"
                        src={course.imageUrl}
                        width="600"
                        data-ai-hint={course.imageHint}
                    />
                    <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-2">{course.category}</Badge>
                        <CardTitle>{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center text-sm text-muted-foreground gap-4">
                        <div className="flex items-center gap-1.5"><BookOpen className="h-4 w-4" /> {course.lessons} Lessons</div>
                        <div className="flex items-center gap-1.5"><Users className="h-4 w-4" /> {course.hours} Hours</div>
                    </CardContent>
                    <CardFooter className="bg-secondary/20 pt-4">
                        <Button className="w-full" asChild>
                            <Link href={`/courses/${course.id}`}>Start Learning</Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold tracking-tight">Upcoming Workshops</h3>
            <Button variant="ghost" asChild>
                <Link href="/workshops">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
            {upcomingWorkshops.map(workshop => (
                <Card key={workshop.id} className="flex flex-col sm:flex-row items-center gap-4 p-4 hover:bg-secondary/30 transition-colors">
                    <Image
                        alt={workshop.title}
                        className="aspect-video sm:aspect-square sm:w-32 rounded-md object-cover"
                        height="200"
                        src={workshop.imageUrl}
                        width="200"
                        data-ai-hint={workshop.imageHint}
                    />
                    <div className="flex-1">
                        <h4 className="font-bold text-lg">{workshop.title}</h4>
                        <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(workshop.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                        </div>
                         <Button size="sm" className="mt-4" asChild>
                            <Link href={`/workshops/${workshop.id}`}>Learn More</Link>
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
      </section>
      
      <section>
        <h3 className="text-2xl font-bold tracking-tight text-center mb-6">What Our Students Say</h3>
        <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map(testimonial => (
                <Card key={testimonial.id} className="bg-secondary/20">
                    <CardContent className="pt-6">
                        <div className="space-y-4 text-center">
                            <Avatar className="mx-auto h-16 w-16 border-2 border-primary">
                                <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.imageHint}/>
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex justify-center gap-0.5">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                            </div>
                            <blockquote className="text-muted-foreground text-sm">"{testimonial.text}"</blockquote>
                            <p className="font-semibold text-foreground pt-2">{testimonial.name}</p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
