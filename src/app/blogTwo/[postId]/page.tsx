import { Post } from "@/app/types/Post";

type Props = {
  params: {
    postId: number;
  };
};

const Page = async ({ params }: Props) => {
  const postRequest = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post: Post = await postRequest.json();

  if (!post.id)
    return <div className="text-center uppercase">Volte depois</div>;

  return (
    <div className="text-center">
      <h1>Id: {post.id}</h1>
      <h1 className="text-3xl uppercase mb-3">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Page;
