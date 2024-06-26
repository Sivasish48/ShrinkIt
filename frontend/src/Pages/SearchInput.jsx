import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import DialogButton from './DialogButton';
import axios from 'axios';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { useState } from 'react';

const FormSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.'
    })
});

export default function SearchInput() {
    const [orgLink, setOrgLink] = useState(''); // Added state for original link

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: { username: '' }
    });

    function onSubmit(data) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            )
        });
    }

    return (
        <div className="grid h-screen place-items-center mt-[-8%]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Paste Your Url here.</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter Link to Shrink"
                                        {...field}
                                        value={field.value}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setOrgLink(e.target.value); // Updated to set original link state
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <DialogButton url={orgLink} /> // Passed orgLink to DialogButton
                </form>
            </Form>
        </div>
    );
}
