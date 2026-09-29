// Types:
import { INewsletterData } from "@/types/footer.types";

const NewsletterSection = ({ title, description }: INewsletterData) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-serif text-3xl leading-none font-medium">
          {title}
        </h3>
        <p className="leading-normal font-light">{description}</p>
      </div>
    </div>
  );
};

export default NewsletterSection;
