import PostDetails from "@/components/sections/post-details/PostDetails";

interface PageProps {
  params: {
    uuid: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { uuid } = await params;

  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center gap-1 lg:px-0 md:mx-56 mx-6 md:mt-1 py-6">
        <PostDetails uuid={uuid} />
      </div>
    </div>
  );
}
