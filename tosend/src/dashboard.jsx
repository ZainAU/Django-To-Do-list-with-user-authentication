export default function Dashboard({ user }) {
    return (
      <div>
        <h2>Welcome, {user}!</h2>
        <p>You are now logged in.</p>
      </div>
    );
  }