type Props = {
  params: {
    postId: string;
    action: string;
  };
};

const Page = ({ params }: Props) => {
  console.log(params.postId);
  return (
    <div>
      Blog Id: {params.postId} / ({params.action})
    </div>
  );
};

export default Page;
