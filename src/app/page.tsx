"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    // Ensure your environment variable is correctly named and accessible
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=IGQWRNQkFQR3haUjlMTW1WeWEta2tiaW5jTl9jdzZACajRGcXZAMTWh3ZAUZAnZA3hZAc2gzSFVSSFBkaWlnZAF81U0pjcWU5R3QxR3I3OUhoU2JDeElBa1lvQWs5cUdDOGFzSjZAZASWM5NWt4SVMzVjhRUEpCOWxYVng1STQZD`;
    // const url = `https://graph.instagram.com/me/media?fields=id,caption&access_token=${process.env.INSTA_KEY}`;

    const fetchData = async () => {
      try {
        // Directly use the data returned by Axios
        const response = await axios.get(url);
        console.log(response.data);
        setData(response.data); // Update state with fetched data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const removeHashtags = (caption: string): string => {
    return caption.replace(/#\S+/g, "");
  };

  return (
    <>
      <h1 className='mx-auto text-3xl w-full text-center my-10'>
        This is my Insta Feed
      </h1>
      <div className='grid grid-cols-3 gap-10 max-w-7xl mx-auto grid-flow-row'>
        {/* Optionally render some part of the fetched data */}
        {data?.data?.map((item: any) => (
          <div
            key={item?.id}
            className='bg-gray-200 flex flex-col items-center justify-center p-5  gap-5 rounded-md '
          >
            <img
              className='w-1/2'
              src={item?.media_url}
              height={100}
              width={100}
              alt='img'
            />
            <h2 className='text-black'>{removeHashtags(item.caption)}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
