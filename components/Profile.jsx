import { useUser } from "@auth0/nextjs-auth0";

function Profile() {
  const { user, error, isLoading } = useUser();

  const logoutUrl = "/api/auth/logout";
  const loginUrl = "/api/auth/login";
  if (error) {
    return "error";
  } else if (isLoading) {
    return "loading";
  } else if (user) {
    return (
      <div>
        <img src={user.picture || ""} alt={user.name || ""} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <a href={logoutUrl}>Logout</a>
      </div>
    );
  } else {
    return (
      <div>
        <a href={loginUrl}>Login</a>
      </div>
    );
  }
}

export default Profile;
