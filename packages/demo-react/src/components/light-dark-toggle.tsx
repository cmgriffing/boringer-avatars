import * as React from "react";
import { useState, useEffect } from "react";
import { Theme } from "../utils/common.utils";
import { LightDarkToggleProps } from "./light-dark-toggle.utils";

export default function LightDarkToggle(props: any) {
  const [selectedTheme, setSelectedTheme] = useState(() => Theme.Light);

  function handleChange(event) {
    const newTheme = selectedTheme === Theme.Dark ? Theme.Light : Theme.Dark;
    setSelectedTheme(newTheme);
    props.onChange(newTheme);
  }

  useEffect(() => {
    setSelectedTheme(props.theme || Theme.Light);
  }, []);

  useEffect(() => {
    setSelectedTheme(props.theme || Theme.Light);
  }, [props.theme]);

  return (
    <div className="light-dark-toggle widget-wrapper">
      <label className="checkbox-label" htmlFor="theme-checkbox">
        <input
          id="theme-checkbox"
          type="checkbox"
          className="sr-only radio-item"
          name="theme-checkbox"
          onChange={(event) => {
            handleChange(event);
          }}
        />

        <svg width="20" height="20" fill="none">
          <circle
            cx="10"
            cy="10"
            r="9"
            stroke="currentColor"
            stroke-width="2"
          />

          <path d="M10 0a10 10 0 000 20V0z" fill="currentColor" />
        </svg>
      </label>
    </div>
  );
}
