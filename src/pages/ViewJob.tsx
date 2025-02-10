import HTMLRenderer from "@/components/HTMLRenderer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import useGetJobById from "@/hooks/useGetJobById";
import { Badge, MapPin, Star } from "lucide-react";
import { Link, useParams } from "react-router";

function ViewJob() {
  const { id } = useParams();
  const { data: job, isLoading, error, isError } = useGetJobById(id || "");
  if (isLoading)
    return (
      <main className="grid grid-cols-1 justify-items-center  gap-4 w-screen pt-5 ">
        <Skeleton className="w-full max-w-2xl h-96" />
        <div className="flex gap-4  max-wjustify-center items-center">
          <Skeleton className=" w-28 h-8 " />
          <Skeleton className=" w-28 h-8" />
        </div>
      </main>
    );
  if (isError) return <p>{error?.message}</p>;
  if (!job) return <p>Job not found</p>;
  console.log(job);
  return (
    <main className="min-h-screen bg-background container mx-auto px-4 py-8  grid grid-cols-1 justify-items-center gap-4">
      <Card className="w-full max-w-2xl mx-auto dark:bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{job.jobTitle}</CardTitle>
          <p className="text-muted-foreground">{job.company}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-bold ">Skills Required:</h3>
            <ul className="flex flex-col  gap-2 mt-2">
              {job.skills.map((skill: string) => (
                <li key={skill} className="flex ">
                  <span className="flex flex-nowrap gap-2 items-center">
                    <Star className="w-4 h-4" />
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold ">Locations:</h3>
            <p className="dark:text-white/90 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {job.locations?.join(", ")}
            </p>
          </div>

          <div>
            <h3 className="font-bold ">Salary Range:</h3>
            <p className="dark:text-white/90">
              ${job.salaryRangeMin} - ${job.salaryRangeMax} per year
            </p>
          </div>

          <div>
            <h3 className="font-bold ">Experience Required:</h3>
            <p className="dark:text-white/90">
              {job.experienceMin} - {job.experienceMax} years
            </p>
          </div>

          <div>
            <h3 className="font-bold ">Job Description:</h3>
            <HTMLRenderer content={job.description} />
          </div>
        </CardContent>
      </Card>
      <div className="flex gap-4 ">
        <Button className="border-2" variant={"secondary"}>
          Save
        </Button>
        <Button>Apply Now</Button>
      </div>
    </main>
  );
}

export default ViewJob;
