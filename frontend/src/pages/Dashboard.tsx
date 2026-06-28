function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Welcome to StackPrep AI 🚀</h1>
      <p>Your AI-Powered Interview Preparation Platform</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div style={{ border: "1px solid #ddd", padding: "20px" }}>
          <h2>📄 Resume Analyzer</h2>
          <p>Upload and analyze your resume with AI.</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px" }}>
          <h2>🎤 Mock Interview</h2>
          <p>Practice technical and HR interviews.</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px" }}>
          <h2>📊 Analytics</h2>
          <p>Track scores and improvement areas.</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px" }}>
          <h2>👤 Profile</h2>
          <p>Manage account and interview history.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;