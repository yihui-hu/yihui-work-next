"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Listening() {
  const [song, setSong] = useState<string>("undef");
  const [artist, setArtist] = useState<string>("undef");
  const [src, setSrc] = useState<string>(
    "https://open.spotify.com/user/notyihui"
  );
  const [img, setImg] = useState<string>(
    "https://yihui-work.s3.us-east-2.amazonaws.com/placeholder-track-art.png"
  );

  useEffect(() => {
    (async () => {
      const isCached = localStorage.getItem("listeningToCached");
      const cachedTime = localStorage.getItem("listeningToCacheTimestamp");

      if (isCached && cachedTime) {
        const image = localStorage.getItem("listeningToImage")!;
        const link = localStorage.getItem("listeningToLink")!;
        const title = localStorage.getItem("listeningToTitle")!;
        const artist = localStorage.getItem("listeningToArtist")!;
        // const listening = localStorage.getItem("listeningToListening")!;

        setImg(image);
        setArtist(artist);
        setSong(title);
        setSrc(link);

        const currentTime = new Date().getTime();
        const twoMinutes = 2 * 60 * 1000;

        if (currentTime - parseInt(cachedTime) > twoMinutes) {
          console.log("Refresh cache");
        }
      }

      const response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=yihuihu&api_key=4154ee8ba6685b36c18d650291b67dc6&format=json&limit=1`
      );
      const data = await response.json();
      const track = data.recenttracks.track[0];
      const artist = track.artist["#text"];
      const image = track.image[2]["#text"];
      const { name: title, url: link } = track;
      console.log(image);

      let listening;
      if (track["@attr"] !== undefined) {
        listening = "🎵 Now Listening";
      } else {
        const timestamp = parseInt(track.date.uts);
        const date = new Date(timestamp * 1000);
        const dateFormat =
          date.getHours() +
          ":" +
          (date.getMinutes() < 10
            ? "0" + date.getMinutes()
            : date.getMinutes()) +
          ", " +
          date.toDateString();
        listening = dateFormat;
      }

      setImg(image);
      setArtist(artist);
      setSong(title);
      setSrc(link);

      localStorage.setItem("listeningToImage", image);
      localStorage.setItem("listeningToLink", link);
      localStorage.setItem("listeningToTitle", title);
      localStorage.setItem("listeningToArtist", artist);
      localStorage.setItem("listeningToListening", listening);
      localStorage.setItem(
        "listeningToCacheTimestamp",
        new Date().getTime().toString()
      );
      localStorage.setItem("listeningToCached", "true");
    })();
  }, []);

  return (
    <div className="image-container">
      <Image
        src={img}
        width={100}
        height={100}
        alt={`${song} by ${artist}`}
        className="disc"
        draggable="false"
        priority={true}
      />
      <div className="center-circle" />
    </div>
  );
}