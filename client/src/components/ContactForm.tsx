import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  ideaDescription: z.string().min(10, { message: 'Please provide more details about your idea (at least 10 characters).' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      ideaDescription: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "We've received your information and will contact you soon to schedule your Launch Hour.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Name</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  className="bg-background/50 border border-foreground/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors duration-300" 
                  placeholder="Your name" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Email</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  type="email" 
                  className="bg-background/50 border border-foreground/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors duration-300" 
                  placeholder="your.email@example.com" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Company (Optional)</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  className="bg-background/50 border border-foreground/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors duration-300" 
                  placeholder="Your company name" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="ideaDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Brief Idea Description</FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  className="w-full bg-background/50 border border-foreground/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="Tell us a bit about your software idea" 
                  rows={4}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={isPending}
          className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-full glow-on-hover transition-all duration-300"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Schedule Your Launch Hour"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
