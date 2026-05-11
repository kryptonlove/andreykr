"use client";

import { useState } from "react";

export function GridToggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button
        className="grid-toggle"
        type="button"
        aria-label={isVisible ? "Hide layout grid" : "Show layout grid"}
        aria-pressed={isVisible}
        onClick={() => setIsVisible((current) => !current)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      {isVisible ? (
        <div className="layout-grid-overlay" aria-hidden="true">
          <div>
            {Array.from({ length: 12 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
