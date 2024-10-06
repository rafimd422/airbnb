import { useEffect, useState } from "react";
import axios from "axios";

const useListings = (category: string | null) => {
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      try {
        const url = category ? `https://airbnb-server-sage.vercel.app/listing?category=${category}` : "https://airbnb-server-sage.vercel.app/listing";
        const response = await axios.get(url);  
        setLoading(false);
        setListings(response.data);
      } catch (err) {
      }
    };

    fetchListings();
  }, [category]);

  return { listings, loading };
};

export default useListings;
