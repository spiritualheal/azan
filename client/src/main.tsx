import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingContactWidget } from "@/components/layout/floating-contact-widget";
import Home from "@/pages/home";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
    <FloatingContactWidget />
  </React.StrictMode>
);
