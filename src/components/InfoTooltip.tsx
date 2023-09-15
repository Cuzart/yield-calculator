import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { IconInfoSquareRounded } from '@tabler/icons-react';

export const InfoTooltip = ({ text }) => {
  return (
    <TooltipProvider delayDuration={250}>
      <Tooltip>
        <TooltipTrigger className='ml-auto'>
          <IconInfoSquareRounded width={24} height={24} opacity={0.8} />
        </TooltipTrigger>
        <TooltipContent side='bottom'>
          <p className='text-xs' style={{ width: '300px' }}>
            {text}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
