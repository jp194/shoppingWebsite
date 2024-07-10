import React from "react";
import Layout from "../components/Layouts/Layout";
import { useAuth } from "../context/auth";

function Home() {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Home"}>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(auth)}</pre>
    </Layout>
  );
}

export default Home;
