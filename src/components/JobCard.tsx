import { Job } from "@/lib/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";

function JobCard({ id, jobTitle, company, locations, shortDescription }: Job) {
  const navigate = useNavigate();
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
      <CardFooter className="flex justify-end gap-3">
        <Button variant="outline" onClick={() => navigate(`/jobs/${id}`)}>
          View
        </Button>
        <Button>Apply</Button>
      </CardFooter>
    </Card>
  );
}

export default JobCard;
