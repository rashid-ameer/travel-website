type FeatureProps = {
  name: string;
  content: string;
  icon: React.ReactNode;
};

function Feature({ name, content, icon }: FeatureProps) {
  return (
    <article className="space-y-3">
      <span className="size-11 rounded-full bg-green-100 flex items-center justify-center text-white">{icon}</span>
      <h3 className="text-xl xl:text-2xl font-bold text-dark">{name}</h3>
      <p>{content}</p>
    </article>
  );
}

export default Feature;
