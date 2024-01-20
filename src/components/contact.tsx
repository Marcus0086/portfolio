"use client";

import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { userMetaData } from "@/components/constants";

const Contact = () => {
  const router = useRouter();

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");
    router.push(
      `mailto:${userMetaData.email}?subject=${subject}&body=${message}%0D%0A%0D%0A${name}%0D%0A${email}`
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Contact Me</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] rounded-md mx-auto">
        <DialogHeader>
          <DialogTitle>{`Let's talk about your project!`}</DialogTitle>
          <DialogDescription>
            {`If you have any questions or would like to work together, please feel free to reach out`}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              className="min-h-[100px]"
              id="message"
              name="message"
              required
            />
          </div>
          <DialogFooter className="flex flex-row items-center justify-end gap-x-2">
            <Button type="submit">Send</Button>
            <DialogClose>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Contact;
