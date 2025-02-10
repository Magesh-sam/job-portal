import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import useSetJobs from "@/hooks/useSetJobs";
import { useNavigate } from "react-router";
import Select from "react-select";
import { locations, skills } from "@/lib/data";
import { Job } from "@/lib/types";
import { Editor } from "@tinymce/tinymce-react";

const formSchema = z.object({
  jobTitle: z.string().min(2).max(20),
  company: z.string().min(2).max(20),
  shortDescription: z.string().min(10).max(100),
  description: z.string().min(30),
  locations: z.array(z.string()).nonempty("At least one location is required"),
  skills: z.array(z.string()).nonempty("At least one skill is required"),
  salaryRangeMin: z.coerce.number().positive(),
  salaryRangeMax: z.coerce.number().positive(),
  experienceMin: z.coerce.number().nonnegative(),
  experienceMax: z.coerce.number().positive(),
});

function NewJobForm() {
  const TINYMCE_API_KEY = import.meta.env.VITE_TINYMCE_KEY;
  const { mutate: addNewJob } = useSetJobs();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: "",
      company: "",
      shortDescription: "",
      description: "",
      locations: [""] as [string, ...string[]],
      skills: [""] as [string, ...string[]],
      salaryRangeMin: 0,
      salaryRangeMax: 0,
      experienceMin: 0,
      experienceMax: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const job: Job = {
      id: crypto.randomUUID(),
      ...values,
    };
    console.log(job);
    addNewJob(job);
    navigate("/jobs");
  }

  return (
    <main>
      <h1 className="text-3xl font-bold text-center mt-3">New Job Form</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 container mx-auto px-6 py-8 max-w-3xl border shadow-lg rounded-lg"
        >
          {[
            "jobTitle" as const,
            "company" as const,
            "shortDescription" as const,
          ].map((name) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={`Enter ${name}`} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Editor
                    apiKey={TINYMCE_API_KEY}
                    value={field.value}
                    onEditorChange={(content) => field.onChange(content)}
                    init={{
                      plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                      toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                      height: 300,
                      menubar: false,
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="locations"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Locations</FormLabel>
                <FormControl>
                  <Select
                    isMulti
                    options={locations}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    value={locations.filter((option) =>
                      field.value.includes(option.value)
                    )}
                    onChange={(selected) =>
                      field.onChange(selected.map((option) => option.value))
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills</FormLabel>
                <FormControl>
                  <Select
                    isMulti
                    options={skills}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    value={skills.filter((option) =>
                      field.value.includes(option.value)
                    )}
                    onChange={(selected) =>
                      field.onChange(selected.map((option) => option.value))
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {[
            "salaryRangeMin" as const,
            "salaryRangeMax" as const,
            "experienceMin" as const,
            "experienceMax" as const,
          ].map((name) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {name.replace(/([A-Z])/g, " $1").trim()}
                  </FormLabel>
                  <FormControl>
                    <Input type="number" {...field} placeholder={name} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button className="w-fit mx-auto" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}

export default NewJobForm;
