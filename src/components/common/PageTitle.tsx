type PageTitleProps = {
  title: string;
  titleRu: string;
};

export function PageTitle({ title, titleRu }: PageTitleProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight dark:text-white">
        {title}
      </h1>
      <p className="text-grey-400 dark:text-gray-400 mb-2">{titleRu}</p>
    </div>
  );
}
