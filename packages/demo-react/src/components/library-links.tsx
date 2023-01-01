import * as React from "react";
import { LibraryLinksProps } from "./library-links.utils";

export default function LibraryLinks(props: any) {
  return (
    <>
      <div className="widget-wrapper">
        <a
          target="_blank"
          rel="noreferrer noopener"
          className="radio-label selected"
          href={props.githubUrl}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5808 20.2773 21.0498 21.7438 19.0074C23.2103 16.9651 23.9994 14.5143 24 12C24 5.37 18.63 0 12 0Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      <div className="widget-wrapper">
        <a
          href="../"
          target="_blank"
          rel="noreferrer noopener"
          className="radio-label selected"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.001 -0.00185812C8.81828 -0.00185812 5.76618 1.26248 3.5157 3.51287C1.26531 5.76344 0.000976562 8.81574 0.000976562 11.9981C0.000976562 15.1805 1.26531 18.2329 3.5157 20.4834C5.76609 22.7338 8.81857 23.9981 12.001 23.9981C15.1834 23.9981 18.2357 22.7338 20.4862 20.4834C22.7367 18.2331 24.001 15.1805 24.001 11.9981C23.9974 8.8166 22.732 5.76668 20.4823 3.51667C18.2325 1.26705 15.1823 0.00160987 12.0009 -0.00195312L12.001 -0.00185812ZM12.001 4.39806C12.2999 4.39806 12.5866 4.51692 12.7978 4.72823C13.0093 4.93954 13.128 5.22637 13.128 5.52528C13.128 5.82402 13.0093 6.11086 12.7978 6.32214C12.5865 6.53345 12.2999 6.65213 12.001 6.65213C11.7021 6.65213 11.4154 6.53345 11.2041 6.32214C10.9926 6.11064 10.8739 5.824 10.8739 5.52509C10.8739 5.22618 10.9926 4.93951 11.2041 4.72823C11.4154 4.51692 11.7021 4.39806 12.001 4.39806ZM14.5368 19.05C14.5368 19.2055 14.4107 19.3314 14.2554 19.3314H9.74647C9.59115 19.3314 9.46503 19.2055 9.46503 19.05V17.3587C9.46503 17.2032 9.59114 17.0773 9.74647 17.0773H10.8739V10.8787H9.74647C9.59115 10.8787 9.46503 10.7526 9.46503 10.5973V8.90586C9.46503 8.75054 9.59114 8.62461 9.74647 8.62461H12.8466C13.002 8.62461 13.128 8.75054 13.128 8.90586V17.0773H14.2554C14.4107 17.0773 14.5368 17.2032 14.5368 17.3587V19.05Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </>
  );
}
