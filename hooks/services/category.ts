
import { GetCategories } from "@/services/category";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query"

export const useGetCategories = (params: any, enabled = false) => {

    return useQuery({
        queryKey: ["get-categories", params],
        queryFn: ({ pageParam = 1 }) => {
            return GetCategories({});
        },
        enabled
    })
}