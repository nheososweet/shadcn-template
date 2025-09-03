"use client"

import { useGetCategories } from "@/hooks/services/category";
import { TestTable } from "./_components/table";

export default function Page() {
    const {
        data: categoryData,
        isFetching: isFetchingDatabases,
    } = useGetCategories({}, true);
    console.log("🚀 ~ Page ~ categoryData:", categoryData)
    return (
        <div className="h-full flex flex-1 flex-col gap-4 p-4 pt-0">
            <TestTable data={categoryData?.items || []} />
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
            </div>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
    )
}
