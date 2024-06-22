import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { IconInfoSquareRounded } from '@tabler/icons-react';
import { useState } from 'react';

export const InfoTooltip = ({ text }: { text: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <TooltipProvider delayDuration={250}>
      <Tooltip open={open} delayDuration={0} onOpenChange={setOpen}>
        <TooltipTrigger onClick={() => setOpen(true)} className='ml-auto'>
          <IconInfoSquareRounded
            width={24}
            height={24}
            className='transition-opacity opacity-80 hover:opacity-100'
          />
        </TooltipTrigger>
        <TooltipContent className='p-4' side='bottom'>
          <p className='text-sm md:text-md' style={{ width: '300px' }}>
            {text}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
