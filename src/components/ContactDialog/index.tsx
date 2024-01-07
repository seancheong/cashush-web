import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';

export const ContactDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='min-w-36 w-fit text-foreground hover:bg-primary hover:opacity-95'>
          <EnvelopeClosedIcon className='mr-1 w-4 h-4' />
          Contact Us
        </Button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='mb-4'>Learn More About Cashush</DialogTitle>

          <DialogDescription>
            As we are in the early stages of our journey, we are currently
            building our support infrastructure.
          </DialogDescription>

          <DialogDescription>
            In the meantime, please feel free to send any inquiries or questions
            you have to{' '}
            <a
              href={`mailto:${process.env.CONTACT_EMAIL}`}
              className='text-blue-500'
            >
              {process.env.CONTACT_EMAIL}
            </a>
            . We value your curiosity and will respond to your emails promptly.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
