"use client";

import Theming from "@/Theme/Theming";
import "./globals.css";
import Snowfall from "react-snowfall";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-gray-800 to-black">
        <Theming>
        <Snowfall
        snowflakeCount={200}
        color="grey"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -9,
        }}
        speed={"140"}
        radius={"12"}
      />
          <main>{children}</main>
        </Theming>
      </body>
    </html>
  );
}
