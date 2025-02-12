import { queryClient } from "@/components/Providers";
import { Job } from "@/lib/types";
import { API } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";

const updateJob = (job: Job) => {
  return API.patch(`/jobs/${job.id}`, job);
};
function useUpdateJob() {
  const mutation = useMutation({
    mutationFn: updateJob,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });
    },
  });
  return mutation;
}
export default useUpdateJob;
