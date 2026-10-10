const Content = ({ content }: { content: string[] }) => {
  return (
    <>
      {content.map((paragraph, index) => (
        <p
          key={paragraph}
          className={
            index === 0
              ? "text-lg leading-8 sm:text-xl sm:leading-9 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-5xl first-letter:font-semibold first-letter:leading-none"
              : "text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9"
          }
        >
          {paragraph}
        </p>
      ))}
    </>
  );
};

export default Content;
