type Props = {
  params: {
    name: string;
  };
};

const Page = ({ params }: Props) => {
  console.log(params.name);
  return <div>Página {params.name}</div>;
};

export default Page;
