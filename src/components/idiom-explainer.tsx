"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getIdiomExplanation } from "@/app/actions";
import type { ExplainLocalIdiomOutput } from "@/ai/flows/explain-local-idioms";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Lightbulb, CheckCircle, XCircle } from "lucide-react";
import { Separator } from "./ui/separator";

const formSchema = z.object({
  idiom: z.string().min(2, {
    message: "Idiom must be at least 2 characters.",
  }),
  situation: z.string().optional(),
});

export function IdiomExplainer() {
  const [result, setResult] = useState<ExplainLocalIdiomOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      idiom: "",
      situation: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);

    const response = await getIdiomExplanation(values);

    setIsLoading(false);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: response.error,
      });
    }
  }

  return (
    <div className="grid gap-6">
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>Local Idiom Explainer</CardTitle>
              <CardDescription>
                Get AI-powered insights into common local expressions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="idiom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Idiom</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 'break a leg'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="situation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Situation (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe a situation where you might use this idiom."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Providing context helps the AI determine if the idiom is applicable.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Explain Idiom
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {isLoading && (
        <Card>
          <CardContent className="p-6 flex items-center justify-center">
            <Loader2 className="mr-2 h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Generating explanation...</p>
          </CardContent>
        </Card>
      )}

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-accent" />
              Explanation for "{form.getValues("idiom")}"
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Meaning</h3>
              <p className="text-muted-foreground">{result.explanation}</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold">Cultural Context</h3>
              <p className="text-muted-foreground">{result.culturalContext}</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold">Appropriate Usage</h3>
              <p className="text-muted-foreground">{result.appropriateUsage}</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold">Example</h3>
              <p className="text-muted-foreground italic">"{result.example}"</p>
            </div>
            {form.getValues("situation") && (
              <>
                <Separator />
                <div>
                  <h3 className="font-semibold">Applicability to your situation</h3>
                  <div className="flex items-center gap-2 mt-2">
                    {result.isApplicable ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                    <p className="text-muted-foreground">
                      {result.isApplicable ? "This idiom is likely applicable." : "This idiom may not be suitable for the situation."}
                    </p>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
