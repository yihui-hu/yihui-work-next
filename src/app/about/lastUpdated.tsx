"use client";

import { useEffect, useState } from "react";

export default function LastUpdated() {
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.github.com/repos/yihui-hu/yihui-work-next/commits`
      );
      const data = await response.json();

      const rawDate = data[0]!.commit!.committer!.date as string;
      const js = Date.parse(rawDate);
      const timestamp = js;
      const date = new Date(timestamp);
      const dateFormat =
        date.getHours() +
        ":" +
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ", " +
        date.toDateString();

      setLastUpdated(dateFormat);
    })();
  }, []);

  return (
    <div style={{ color: "#b9b9b9", marginTop: 24 }}>
      Site last updated: {lastUpdated}
    </div>
  );
}
