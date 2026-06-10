function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function AvatarWithEdit({
  src,
  alt,
  onEdit,
}: Readonly<{
  src: string;
  alt: string;
  onEdit?: () => void;
}>) {
  return (
    <div className="relative size-19 shrink-0">
      <img
        src={src || "/photo.png"}
        alt={alt}
        className="size-19 rounded-full object-cover ring-4 ring-white"
      />

      <button
        type="button"
        onClick={onEdit}
        aria-label="Edit profile photo"
        className={cn(
          "cursor-pointer absolute bottom-0.5 -right-1 grid h-5.75 w-5.25 place-items-center rounded-full",
          "bg-brand text-white shadow-md",
          "transition-transform hover:scale-105 active:scale-95"
        )}
      >
        <img className="object-contain" src="/camera.svg" alt="Edit" width={21} height={23} />
      </button>
    </div>
  );
}

export default AvatarWithEdit


