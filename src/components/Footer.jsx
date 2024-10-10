import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();

  const footerNavs = [
    {
      label: "Company",
      items: [
        {
          href: "javascript:void()",
          name: "Partners",
        },
        {
          href: "javascript:void()",
          name: "Blog",
        },
        {
          href: "javascript:void()",
          name: "Team",
        },
        {
          href: "javascript:void()",
          name: "Careers",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          href: "javascript:void()",
          name: "contact",
        },
        {
          href: "javascript:void()",
          name: "Support",
        },
        {
          href: "javascript:void()",
          name: "Docs",
        },
        {
          href: "javascript:void()",
          name: "Pricing",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: "javascript:void()",
          name: "Terms",
        },
        {
          href: "javascript:void()",
          name: "License",
        },
        {
          href: "javascript:void()",
          name: "Privacy",
        },
        {
          href: "javascript:void()",
          name: "About US",
        },
      ],
    },
  ];

  return (
    <footer className="text-gray-500 bg-white py-5 px-5">
      <div className="gap-6 justify-between md:flex">
        <div className="flex-1">
          <div className="max-w-xs">
            <img src="https://www.floatui.com/logo.svg" className="w-32" alt="devRoots logo" />
            <p className="leading-relaxed mt-2 text-[15px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>
        </div>
        <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="text-gray-800 font-medium">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    href={el.href}
                    className="hover:underline hover:text-indigo-600"
                    title={`Go to ${el.name} page`}
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; {year} devRoots All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="https://github.com/dev-roots" target="__blank" title="Go to devRoots GitHub Organization">
                <svg
                  class="h-6 w-6 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};
