import AccountSettings from "../components/AccountSettings";

export default function AccountSettingsPage() {
  return (
    <AccountSettings
      profile={{
        name: "Marry Doe",
        email: "marry@gmail.com",
        bio: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam",
        avatarUrl: "/photo.png",
      }}
      onEditAvatar={() => {}}
    />
  );
}