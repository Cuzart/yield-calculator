'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { useEffect, useMemo, useState } from 'react';

const formSchema = z.object({
  starterCapital: z.number().positive().nullable(),
  period: z.enum(['jährlich', 'monatlich', 'wöchentlich']),
  duration: z.number().positive().max(100),
  savingSum: z.number().positive(),
  interest: z.number().positive(),
  distributionForm: z.enum(['ausschüttend', 'thesaurierend']),
});

export const YieldForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      starterCapital: undefined,
      period: undefined,
      duration: undefined,
      savingSum: undefined,
      interest: undefined,
      distributionForm: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(112, values);
  }

  const result = useMemo(() => {
    console.log(23, form.getValues('starterCapital'));
    return (
      form.getValues('starterCapital') ||
      0 +
        form.getValues('savingSum') *
          (1 + form.getValues('interest') / 100) ** form.getValues('duration')
    );
  }, [form.getValues('starterCapital'), form.getValues('savingSum'), form.getValues('interest')]);

  console.log(form.getValues('starterCapital'));

  useEffect(() => {
    console.log('first');
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 max-w-md mx-auto'>
        <FormField
          control={form.control}
          name='starterCapital'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Startkapital</FormLabel>
              <FormControl>
                <Input type='number' placeholder='Startkapital' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='period'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Periode</FormLabel>
              <FormControl>
                <Input type='number' placeholder='Periode' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='interest'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zinssatz</FormLabel>
              <FormControl>
                <Input type='number' placeholder='Zinssatz' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='duration'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Anlagedauer (Jahre)</FormLabel>
              <FormControl>
                <Input type='number' placeholder='Anlagedauer (Jahre)' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='distributionForm'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Anlageform</FormLabel>
              <FormControl>
                <Input type='number' placeholder='Anlageform' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='savingSum'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sparbetrag</FormLabel>
              <FormControl>
                <Input type='number' placeholder='Sparbetrag' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type='button' onClick={() => onSubmit(form.getValues())}>
          submit
        </button>
      </form>

      <div>Ergebnis {result}</div>
    </Form>
  );
};
