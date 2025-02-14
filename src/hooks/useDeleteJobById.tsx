import { queryClient } from "@/components/Providers";
import { API } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";

const deleteJob = (id: string) => {
  return API.delete(`/jobs/${id}`);
};
function useDeleteJobById() {
  const mutuation = useMutation({
    mutationFn: deleteJob,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });
    },
  });
  return mutuation;
}
export default useDeleteJobById;
