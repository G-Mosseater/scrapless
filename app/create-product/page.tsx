import { Dropzone, DropzoneContent, DropzoneEmptyState, useDropzoneContext } from "../../components/dropzone";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";

export default async function createproduct() {
    return(
        <div>
       {/* <div className="w-[500px]">
        <Dropzone {...props}>
        <DropzoneEmptyState />
        <DropzoneContent />
       </Dropzone>
      </div> */}
    <div>
        <p className="my-2 text-xs">produckt name</p>
        <Input></Input>
        <p className="my-2 text-xs">origin</p>
        <Input></Input>
        <p className="my-2 text-xs">quantity</p>
        <Input></Input>
    </div>
    <div>
        <p className="my-2">description</p>
        <Textarea></Textarea>
    </div>
    <div className="flex justify-center">
        <Button className="w-40 h-7 my-3">create</Button>
    </div>
    </div>
    );
}