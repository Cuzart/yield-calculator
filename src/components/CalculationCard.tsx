import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import '@/styles/global.css';
import { useClipboard, useDebouncedValue } from '@mantine/hooks';
import { IconCheck } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { Chart } from './Chart';

const formatter = new Intl.NumberFormat('de-DE', {
  style: 'decimal',
  maximumFractionDigits: 0,
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
  const clipboard = useClipboard({ timeout: 1000 });

  const prevResult = useRef<number>(0);
  useEffect(() => {
    prevResult.current = debouncedResult;
  }, [debouncedResult]);

  const prevInterestSum = useRef<number>(0);
  useEffect(() => {
    prevInterestSum.current = debouncedInterestSum;
  }, [debouncedInterestSum]);

  return (
    <>
      <Card
        className={
          'fixed right-8 bottom-8 z-50 transition-all duration-2000 delay-200' +
          (clipboard.copied ? ' opacity-1 translate-y-0' : ' opacity-0 translate-y-4')
        }
      >
        <CardHeader className='pb-0' />
        <CardContent className='flex items-center text-base'>
          <p>Kopiert</p>
          <IconCheck className='ml-1' color='#7FD29F' />
        </CardContent>
      </Card>

      <TooltipProvider>
        <Card style={{ margin: '10px 0px' }}>
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
                    <TooltipTrigger
                      onClick={(e) => {
                        e.preventDefault();
                        clipboard.copy(`${result - interestSum}€`);
                      }}
                    >
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
                    <TooltipTrigger
                      onClick={(e) => {
                        e.preventDefault();
                        clipboard.copy(`${result - interestSum}€`);
                      }}
                    >
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
                      <table className={'interest-table'}>
                        <tbody>
                          <tr>
                            <td>Gewinn</td>
                            <td>{formatter.format(interestSum)}€</td>
                          </tr>

                          <tr>
                            <td>nach Teilfreistellung (30%)</td>
                            <td>{formatter.format(interestSum * 0.7)}€</td>
                          </tr>

                          <tr>
                            <td>Kapitalertragsteuer (~26%)</td>
                            <td>{formatter.format(interestSum * 0.7 * 0.26)}€</td>
                          </tr>

                          <tr>
                            <td>Netto Gewinn</td>
                            <td>{formatter.format(interestSum - interestSum * 0.7 * 0.26)}€</td>
                          </tr>
                        </tbody>
                      </table>
                    </TooltipContent>
                  </Tooltip>

                  {debouncedInterestSum > 0 ? (
                    <p className='text-sm ' style={{ color: '#6BD09E' }}>
                      +
                      {(
                        (debouncedInterestSum / (debouncedResult - debouncedInterestSum)) *
                        100
                      ).toFixed()}
                      %
                    </p>
                  ) : (
                    <p className='text-sm opacity-50'>Keine Rendite</p>
                  )}
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='pb-0'>
                  <CardTitle className='text-sm'>Eingezahlt</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tooltip>
                    <TooltipTrigger
                      onClick={(e) => {
                        e.preventDefault();
                        clipboard.copy(`${result - interestSum}€`);
                      }}
                    >
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
                withoutInterest={debouncedResult - debouncedInterestSum}
              />
            </div>
          </CardContent>
        </Card>
      </TooltipProvider>
    </>
  );
};
