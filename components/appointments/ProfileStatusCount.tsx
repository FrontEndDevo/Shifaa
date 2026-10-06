type ProfileStatusCountProps = {
  title: string;
  count: number;
  color: string;
};

const ProfileStatusCount = ({
  title,
  count,
  color,
}: ProfileStatusCountProps) => {
  return (
    <div
      className={`p-1 rounded bg-${color}-400 transition duration-150 hover:bg-${color}-600`}
    >
      <h4 className="text-sm lg:text-base xl:text-lg font-mono font-semibold italic capitalize">
        {title}
      </h4>
      <p className="mt-1 rounded-full font-bold border-2 w-fit py-px px-2 mx-auto">
        {count}
      </p>
    </div>
  );
};

export default ProfileStatusCount;
