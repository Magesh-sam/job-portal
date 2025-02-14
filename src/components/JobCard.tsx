import { Job } from "@/lib/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";
import { useNavigate } from "react-router";

type JobCardContent = Job & {
  role: string;
};

const JobCardUserActions = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  const handleApply = () => {};

  return (
    <CardFooter className="flex justify-end gap-3">
      <Button variant="outline" onClick={() => navigate(`/jobs/${id}`)}>
        View
      </Button>
      <Button onClick={handleApply} variant={"default"}>
        Apply
      </Button>
    </CardFooter>
  );
};

const JobCardAdminActions = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/jobs/edit/${id}`);
  };
  const handleDelete = () => {};
  return (
    <CardFooter className="flex justify-end gap-3">
      <>
        <Button onClick={handleEdit}>Edit</Button>
        <Dialog>
          <DialogTrigger>
            <Button onClick={handleDelete} variant={"destructive"}>
              Delete
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure want to delete ?</DialogTitle>
              <DialogDescription className="">
                This action cannot be undone. This will permanently delete this
                job and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>
                <Button>Cancel</Button>
              </DialogClose>
              <Button variant={"destructive"}>Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    </CardFooter>
  );
};

function JobCard({
  id,
  jobTitle,
  company,
  locations,
  shortDescription,
  role,
}: JobCardContent) {
  console.log(jobTitle);
  return (
    <Card className="bg-zinc-100 dark:bg-zinc-800" id={id}>
      <CardHeader>
        <CardTitle>{jobTitle}</CardTitle>
        <CardDescription>
          {company} - {locations.join(", ")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{shortDescription}</p>
      </CardContent>
      {role === "user" ? (
        <JobCardUserActions id={id} />
      ) : (
        <JobCardAdminActions id={id} />
      )}
    </Card>
  );
}

export default JobCard;
