import React from "react";

const Footer = () => {
  return (
    <footer className="border-top pt-3">
      <div className="text-center text-muted">
        <p>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <span>
            <a
              href="https://aynalhossain.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              aynalhossain.com
            </a>{" "}
          </span>{" "}
          . All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
