import Link from "next/link";

const Homepage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#151C2C',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '36px',
          color: 'white',
          marginBottom: '16px',
        }}
      >
        Welcome to the Homepage
      </h1>
      <p
        style={{
          fontSize: '18px',
          color: '#555',
          marginBottom: '24px',
          maxWidth: '600px',
        }}
      >
        This is your home page. Click the button below to visit the dashboard.
      </p>
      <Link href="/dashboard">
        <button
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#6c5ce7',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
};

export default Homepage;
