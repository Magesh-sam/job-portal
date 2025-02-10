import { queryClient } from "@/components/Providers";
import { Job } from "@/lib/types";
import { API } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";

const setJob = (job: Job) => {
  return API.post("/jobs", job);
};
function useSetJobs() {
  const mutuation = useMutation({
    mutationFn: setJob,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });
    },
  });
  return mutuation;
}
export default useSetJobs;
