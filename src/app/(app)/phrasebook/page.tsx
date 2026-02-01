import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const categories = [
  {
    title: "Greetings",
    phrases: [
      { phrase: "Hello", translation: "Hola" },
      { phrase: "Good morning", translation: "Buenos días" },
      { phrase: "How are you?", translation: "¿Cómo estás?" },
    ],
  },
  {
    title: "Dining",
    phrases: [
      { phrase: "A table for two, please.", translation: "Una mesa para dos, por favor." },
      { phrase: "The check, please.", translation: "La cuenta, por favor." },
      { phrase: "I would like...", translation: "Quisiera..." },
    ],
  },
  {
    title: "Directions",
    phrases: [
      { phrase: "Where is the bathroom?", translation: "¿Dónde está el baño?" },
      { phrase: "How do I get to...?", translation: "¿Cómo llego a...?" },
      { phrase: "Turn right/left", translation: "Gire a la derecha/izquierda" },
    ],
  },
  {
    title: "Shopping",
    phrases: [
      { phrase: "How much is this?", translation: "¿Cuánto cuesta esto?" },
      { phrase: "I'm just looking.", translation: "Solo estoy mirando." },
      { phrase: "Do you accept credit cards?", translation: "¿Aceptan tarjetas de crédito?" },
    ],
  },
];

export default function PhrasebookPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Phrasebook</CardTitle>
        <CardDescription>
          Essential phrases for your travels. Click on a category to expand.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {categories.map((category) => (
            <AccordionItem key={category.title} value={category.title}>
              <AccordionTrigger className="text-lg font-semibold">{category.title}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {category.phrases.map((p, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                      <div>
                        <p className="font-medium">{p.phrase}</p>
                        <p className="text-sm text-muted-foreground">{p.translation}</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Volume2 className="h-5 w-5" />
                        <span className="sr-only">Play audio</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
