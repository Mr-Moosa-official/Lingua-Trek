"use client";

import { useState } from "react";
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

const initialMessages = [
  {
    sender: "bot",
    text: "¡Hola! Bienvenido a la cafetería. ¿Qué te gustaría tomar?",
  },
];

const options = [
  "Un café con leche, por favor.",
  "¿Qué me recomiendas?",
  "Solo agua, gracias.",
];

export default function DialoguesPage() {
  // Note: This is a simplified, non-interactive example.
  // In a real app, state would manage the conversation flow.

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Interactive Dialogue</CardTitle>
          <CardDescription>Practice conversations in real-world scenarios.</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold text-lg mb-4">Scenario: Ordering Coffee</h3>
          <div className="space-y-4 rounded-lg border p-4">
            {/* Bot message */}
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-sm">
                  ¡Hola! Bienvenido a la cafetería. ¿Qué te gustaría tomar?
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  (Hello! Welcome to the coffee shop. What would you like to have?)
                </p>
              </div>
            </div>

            {/* User message (example) */}
            <div className="flex items-start gap-3 justify-end">
              <div className="rounded-lg bg-primary text-primary-foreground p-3">
                <p className="text-sm">
                  Un café con leche, por favor.
                </p>
                 <p className="text-xs text-primary-foreground/80 mt-1">
                  (A latte, please.)
                </p>
              </div>
              <Avatar>
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>

            {/* Bot reply */}
             <div className="flex items-start gap-3">
              <Avatar>
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-sm">
                  ¡Claro! ¿Algo más?
                </p>
                 <p className="text-xs text-muted-foreground mt-1">
                  (Of course! Anything else?)
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2">
          <p className="text-sm font-medium">Your reply:</p>
          <div className="flex flex-wrap gap-2">
            {options.map((opt, i) => (
              <Button key={i} variant="outline">{opt}</Button>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
