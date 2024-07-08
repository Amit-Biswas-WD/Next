import React from "react";

function AboutLayout({ children }) {
  return (
    <div>
      <nav className="my-8">Mission | Vision</nav>
      {children}
    </div>
  );
}

export default AboutLayout;
