import React, { useEffect, useState } from "react";
import type { Suggestion } from "../types/SearchBoxTypes";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";

interface AccordionProps {
  title: string;
  suggestion: Suggestion;
  setUpdateStore: React.Dispatch<React.SetStateAction<boolean>>;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  suggestion,
  setUpdateStore,
}) => {
  const [openAccordion, setOpenAccordion] = useState("");
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const getSessionData = async () => {
      const session = await getSession();

      setSession(session);
    };
    void getSessionData();
  }, []);

  const handleButtonClick = () => {
    const data = {
      name: title,
      type: "ecurie",
      id_Api: suggestion.place_id,
      lon: parseFloat(suggestion.lon),
      lat: parseFloat(suggestion.lat),
      userId: session?.user?.id,
    };

    void fetch("api/UserStore/create", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then(() => {
      setUpdateStore((store) => !store);
    });
  };
  const toggleAccordion = (accordionId: string) => {
    setOpenAccordion((prevState) =>
      prevState === accordionId ? "" : accordionId
    );
  };

  const isAccordionOpen = openAccordion === title;

  return (
    <div>
      <h2>
        <button
          type="button"
          className={`flex w-full items-center justify-between border py-3 pl-2 pr-2 text-left text-sm font-medium text-gray-500 ${
            isAccordionOpen ? "border-b-0" : ""
          } border-gray-200 ${
            isAccordionOpen ? "rounded-t-xl" : ""
          } focus:ring-4 ${
            isAccordionOpen ? "focus:ring-gray-200" : ""
          } hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800`}
          data-accordion-target={`#${title}`}
          aria-expanded={isAccordionOpen}
          aria-controls={title}
          onClick={() => toggleAccordion(title)}
        >
          <span className="flex items-center">
            <svg
              className="mr-2 h-5 w-5 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path */}
            </svg>
            {title}
          </span>
          <svg
            data-accordion-icon
            className={`h-3 w-3 shrink-0 rotate-180 ${
              isAccordionOpen ? "rotate-0" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            {/* SVG path */}
          </svg>
        </button>
      </h2>
      <div
        id={title}
        className={`border p-2 ${
          isAccordionOpen ? "" : "hidden"
        } border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
        aria-labelledby={title}
      >
        {/* Button add */}
        <button
          type="button"
          className="rounded-lg bg-gradient-to-br from-blue-200 to-blue-300 px-5 py-2 text-center text-sm font-medium text-white hover:from-blue-300 hover:to-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          onClick={handleButtonClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Accordion;
