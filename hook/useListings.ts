import { useEffect, useState } from "react";
import axios from "axios";

const useListings = (label?: string | null) => {
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const url = label 
          ? `http://localhost:4000/listing?category=${label}` 
          : "http://localhost:4000/listing";
        
        const response = await axios.get(url);
        setListings(response.data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [label]);

  return { listings, loading };
};

export default useListings;
