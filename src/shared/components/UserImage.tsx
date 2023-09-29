import { cn } from "tailwind-cn";

const UserImage = ({ className = "", inicial = "G" }: any) => {
  return (
    <div
      className={cn(
        "bg-dark-100 flex items-center justify-center rounded-full w-[32px] h-[32px]",
        className
      )}
    >
      <span className="text-white text-md font-bold">{inicial}</span>
    </div>
  );
};

export default UserImage;
