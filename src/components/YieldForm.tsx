import React, { useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import '../styles/global.css';
import { Slider } from '@/components/ui/slider';
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
import { IconCurrencyEuro, IconPercentage, IconCalendar } from '@tabler/icons-react';
import { CalculationCard } from '@/components/CalculationCard';

export const YieldForm = () => {
  const formSchema = z.object({
    starterCapital: z
      .number({
        invalid_type_error: 'Bitte gib eine Zahl an',
      })
      .nonnegative()
      .int()
      .nullable(),
    duration: z
      .number({
        invalid_type_error: 'Bitte gib eine Zahl an',
      })
      .nonnegative()
      .max(100, 'Länger als 100 Jahre? Das glaub ich nicht...')
      .int(),
    savingSum: z
      .number({
        invalid_type_error: 'Bitte gib eine Zahl an',
      })
      .int(),
    interest: z
      .number({
        invalid_type_error: 'Bitte gib eine Zahl an',
      })
      .max(100, 'Mehr als 100% Rendite? Das glaub ich nicht...')
      .nonnegative(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    mode: 'onChange',
    revalidateMode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      starterCapital: 0,
      duration: 5,
      savingSum: 100,
      interest: 7.0,
    },
  });

  const { starterCapital, savingSum, interest, duration } = form.watch();
  const [result, setResult] = useState(0);
  const [interestSum, setInterestSum] = useState(0);

  // set prefered color scheme
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // calculation
  useEffect(() => {
    let sum = starterCapital;
    for (let i = 0; i < duration; i++) {
      let x = 0;
      for (let j = 0; j < 12; j++) {
        sum += savingSum;
        x += sum * (interest / 100 / 12);
      }
      sum += x;
    }

    let withoutInterest = starterCapital + 12 * duration * savingSum;
    setInterestSum(sum - withoutInterest);
    setResult(sum);
  }, [starterCapital, savingSum, interest, duration]);

  const handleCapitalStep = (value: number) => {
    if (value > 50000) return 10000;
    if (value > 25000) return 5000;
    if (value > 5000) return 1000;
    if (value > 500) return 100;
    return 50;
  };
  const handleRateStep = (value: number) => {
    if (value > 300) return 100;
    if (value > 100) return 50;
    return 10;
  };

  const commonInputProps = {
    type: 'number',
    className: 'pr-10',
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
      e.target.select();
    },
  };

  const commonIconProps = {
    className: 'h-4 w-4 opacity-80',
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
    },
  };

  return (
    <>
      <Form {...form}>
        <form className='space-y-3 max-w-xl mx-auto'>
          <FormField
            control={form.control}
            name='starterCapital'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Startkapital</FormLabel>
                  <FormControl>
                    <div style={{ position: 'relative' }}>
                      <Input
                        placeholder='Startkapital'
                        step={handleCapitalStep(starterCapital)}
                        {...field}
                        {...commonInputProps}
                        onChange={(e) => {
                          field.onChange(parseInt(e.target.value) || 0);
                        }}
                      />
                      <IconCurrencyEuro {...commonIconProps} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          {starterCapital > 0 && (
            <Slider
              defaultValue={[starterCapital]}
              max={60000}
              step={handleCapitalStep(starterCapital)}
              onValueChange={(value) => form.setValue('starterCapital', value[0])}
            />
          )}

          <FormField
            control={form.control}
            name='savingSum'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Monatliche Sparrate</FormLabel>
                <FormControl>
                  <div style={{ position: 'relative' }}>
                    <Input
                      placeholder='Monatliche Sparrate'
                      step={handleRateStep(savingSum)}
                      {...field}
                      {...commonInputProps}
                      onChange={(e) => {
                        field.onChange(parseInt(e.target.value));
                      }}
                    />
                    <IconCurrencyEuro {...commonIconProps} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {savingSum > 0 && (
            <Slider
              defaultValue={[savingSum]}
              max={3000}
              step={handleRateStep(savingSum)}
              onValueChange={(value) => form.setValue('savingSum', value[0])}
            />
          )}

          <FormField
            control={form.control}
            name='interest'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jährliche Rendite</FormLabel>
                <FormControl>
                  <div style={{ position: 'relative' }}>
                    <Input
                      placeholder='Jährliche Rendite'
                      {...field}
                      {...commonInputProps}
                      onChange={(e) => {
                        field.onChange(parseFloat(e.target.value.replace(',', '.')));
                      }}
                    />
                    <IconPercentage {...commonIconProps} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {interest > 0 && (
            <Slider
              defaultValue={[interest]}
              max={20}
              step={1}
              onValueChange={(value) => form.setValue('interest', value[0])}
            />
          )}
          <FormField
            control={form.control}
            name='duration'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Anlagedauer (Jahre)</FormLabel>
                <FormControl>
                  <div style={{ position: 'relative' }}>
                    <Input
                      placeholder='Anlagedauer (Jahre)'
                      {...field}
                      {...commonInputProps}
                      onChange={(e) => {
                        field.onChange(parseInt(e.target.value));
                      }}
                    />
                    <IconCalendar {...commonIconProps} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {duration > 0 && (
            <Slider
              defaultValue={[duration]}
              max={100}
              step={1}
              min={1}
              onValueChange={(value) => form.setValue('duration', value[0])}
            />
          )}

          {result > 0 && (
            <CalculationCard interestSum={interestSum} result={result} duration={duration} />
          )}
        </form>
      </Form>
    </>
  );
};
