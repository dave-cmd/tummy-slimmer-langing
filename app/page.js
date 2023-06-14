
import "../styles/scss/style.scss"

import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";
import Link from "next/link";
import Layout from "@/layout/Layout";


export default function Home() {
  return (
    <div>
      <Layout>
          <CustomComponents />
      </Layout>
    </div>
  );
}