import AvatarWithEdit from "./AvatarWithEdit";

type Profile = {
  name: string;
  email: string;
  bio: string;
  avatarUrl: string;
};

type AccountSettingsProps = {
  profile: Profile;
  onEditAvatar?: () => void;
};

function PageHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center bg-white px-3.75 h-17">
      <h1 className="text-[18px] leading-5.25 text-primary">
        {title}
      </h1>
    </div>
  );
}


function ProfileSummary({
  profile,
  onEditAvatar,
}: {
  profile: Profile;
  onEditAvatar?: () => void;
}) {
  return (
    <div className="flex items-start gap-5 py-7.5">
      <AvatarWithEdit
        src={profile.avatarUrl}
        alt={profile.name}
        onEdit={onEditAvatar}
      />

      <div className="space-y-1.5">
        <h2 className="text-[15px] font-medium text-primary">{profile.name}</h2>
        <p className=" text-sm text-primary">{profile.email}</p>
      </div>
    </div>
  );
}

function ProfileBio({ bio }: { readonly bio: string }) {
  return <p className="w-84.75 text-sm leading-5.5 text-primary titlecase text-left ">{bio}</p>;
}

function SectionDivider() {
  return <div
      className="mt-5 h-px w-full"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, #cbcbcb 0 4px, transparent 4px 8px)",
      }}
    />;
}

export default function AccountSettings({
  profile,
  onEditAvatar,
}: AccountSettingsProps) {
  return (
    <section className="">
        <PageHeader title="Account Settings" />

          <ProfileSummary profile={profile} onEditAvatar={onEditAvatar} />

          <ProfileBio bio={profile.bio} />

        <SectionDivider />
    </section>
  );
}