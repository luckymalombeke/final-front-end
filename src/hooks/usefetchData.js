import { useState, useEffect } from "react";

export default function useFetchData(endpoint) {
  const BASE_URL = "http://localhost:3000";
  const URL = `${BASE_URL}/${endpoint}`;

  const [data, setData] = useState([]);

  // GET (Fetch All)
  const fetchData = async () => {
    const res = await fetch(URL);
    const json = await res.json();
    setData(json);
  };

  // POST (Create)
  const createData = async (item) => {
    await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    fetchData();
  };

  // PUT (Update)
  const updateData = async (id, item) => {
    await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    fetchData();
  };

  // DELETE (Remove)
  const deleteData = async (id) => {
    await fetch(`${URL}/${id}`, { method: "DELETE" });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    createData,
    updateData,
    deleteData,
  };
}
