import React, { useRef, useEffect } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Chart } from './Chart';
import CountUp from 'react-countup';
import { useDebouncedValue } from '@mantine/hooks';

const formatter = new Intl.NumberFormat('de-DE', {
  style: 'decimal',
  compactDisplay: 'short',
});

export const CalculationCard = ({
  result,
  interestSum,
  duration,
}: {
  result: number;
  interestSum: number;
  duration: number;
}) => {
  const [debouncedResult] = useDebouncedValue(result, 200);
  const [debouncedInterestSum] = useDebouncedValue(interestSum, 200);

  const prevResult = useRef<number>(0);
  useEffect(() => {
    prevResult.current = debouncedResult;
  }, [debouncedResult]);

  const prevInterestSum = useRef<number>(0);
  useEffect(() => {
    prevInterestSum.current = debouncedInterestSum;
  }, [debouncedInterestSum]);

  return (
    <TooltipProvider>
      <Card style={{ margin: '50px 0px' }}>
        <CardHeader>
          <CardTitle>Deine Prognosse</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='mb-8 grid xs:grid-cols-1 sm:grid-cols-3 sm:grid-rows-1 gap-4'>
            <Card>
              <CardHeader className='pb-0'>
                <CardTitle className='text-sm'>Gesamt</CardTitle>
              </CardHeader>
              <CardContent>
                <Tooltip>
                  <TooltipTrigger>
                    <CountUp
                      className='text-xl font-black line-clamp-1'
                      useEasing={true}
                      start={prevResult.current}
                      end={debouncedResult}
                      duration={0.6}
                      separator='.'
                      decimal=','
                      suffix=' €'
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{formatter.format(result)}€</p>
                  </TooltipContent>
                </Tooltip>
                <p className='text-sm opacity-50'>nach {duration} Jahren</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='pb-0'>
                <CardTitle className='text-sm '>Zinsen</CardTitle>
              </CardHeader>
              <CardContent>
                <Tooltip>
                  <TooltipTrigger>
                    <CountUp
                      className='text-xl font-black line-clamp-1'
                      start={prevInterestSum.current}
                      end={debouncedInterestSum}
                      duration={0.8}
                      separator='.'
                      decimal=','
                      suffix=' €'
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{formatter.format(interestSum)}€</p>
                  </TooltipContent>
                </Tooltip>

                <p className='text-sm ' style={{ color: '#6BD09E' }}>
                  +
                  {(
                    (debouncedInterestSum / (debouncedResult - debouncedInterestSum)) *
                    100
                  ).toFixed()}
                  %
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='pb-0'>
                <CardTitle className='text-sm'>Eingezahlt</CardTitle>
              </CardHeader>
              <CardContent>
                <Tooltip>
                  <TooltipTrigger>
                    <CountUp
                      className='text-xl font-black line-clamp-1'
                      start={prevResult.current - prevInterestSum.current}
                      end={debouncedResult - debouncedInterestSum}
                      duration={0.8}
                      separator='.'
                      decimal=','
                      suffix=' €'
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{formatter.format(result - interestSum)}€</p>
                  </TooltipContent>
                </Tooltip>
                <p className='text-sm opacity-50'>abzgl. Zinsen</p>
              </CardContent>
            </Card>
          </div>

          <div className='max-w-sm mx-auto'>
            <Chart
              interest={debouncedInterestSum}
              withoutInterest={debouncedResult - interestSum}
            />
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};
