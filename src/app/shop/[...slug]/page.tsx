type Props = {
  params: {
    slug: string[];
  };
};

const Page = ({ params }: Props) => {
  console.log(params.slug);
  return <div>SLUG: {params.slug.join(", ")}</div>;
};

export default Page;
