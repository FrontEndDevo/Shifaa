const Content = ({ content }: { content: string[] }) => {
  return (
    <>
      {content.map((paragraph, index) => (
        <p
          key={index}
          className={
            index === 0
              ? "text-lg leading-8 sm:text-xl sm:leading-9 ltr:first-letter:float-start ltr:first-letter:me-3 ltr:first-letter:mt-1 ltr:first-letter:text-5xl ltr:first-letter:font-semibold ltr:first-letter:leading-none"
              : "text-base leading-8 text-soft sm:text-lg sm:leading-9"
          }
        >
          {paragraph}
        </p>
      ))}
    </>
  );
};

export default Content;
