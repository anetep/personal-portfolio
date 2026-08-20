"use client";

import { useEffect, useRef } from "react";

const widgetId = "gr_custom_widget_1787185012";
const scriptId = "goodreads-currently-reading-widget";
const widgetUrl =
  "https://www.goodreads.com/review/custom_widget/193464562.Anete%27s%20bookshelf%3A%20currently-reading?cover_position=left&cover_size=small&num_books=2&order=d&shelf=currently-reading&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=1&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1787185012&widget_text_color=000000&widget_title_size=medium&widget_width=medium";

export function GoodreadsWidget() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (document.getElementById(scriptId) || !wrapperRef.current) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = widgetUrl;
    script.async = true;
    script.charset = "utf-8";
    wrapperRef.current.appendChild(script);
  }, []);

  return (
    <div ref={wrapperRef} className="goodreads-widget mt-5">
      <div id={widgetId}>
        <a
          href="https://www.goodreads.com/review/list/193464562-anete-pereira?shelf=currently-reading"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs text-[var(--muted)] underline"
        >
          See my currently reading shelf on Goodreads
        </a>
      </div>
    </div>
  );
}
