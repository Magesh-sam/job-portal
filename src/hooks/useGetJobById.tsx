import { API } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

const getJobById = async (id: string) => {
  try {
    const response = await API.get(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch jobs");
  }
};

function useGetJobById(id: string) {
  return useQuery({
    queryKey: ["jobs", id],
    queryFn: () => getJobById(id),
  });
}

export default useGetJobById;
