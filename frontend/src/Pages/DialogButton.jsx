import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button"
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
  } from "@/components/ui/dialog"
import { useState } from "react";
  

  function DialogButton(){

    const [value,setValue]=useState("injn")
    const [copied,setCopied]=useState(false)

    

    return <div>
        <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">ShrinK it</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Copy link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to visit the site.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              value={value}

              onChange={((e)=>{
                return setValue(e.target.value)
              })}
              readOnly
            />
          </div>

          <CopyToClipboard text={value}
          onCopy={()=> setCopied(true) }>

          <Button size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4"  />
          </Button>

          </CopyToClipboard>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    </div>
  }


  export default DialogButton