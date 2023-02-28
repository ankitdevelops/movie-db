import { useState, useEffect } from "react";
import Card from "./Components/Card";
import Search from "./Components/Search";
import axios from "axios";
function App() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("");
  const [error, setError] = useState("");
  const [imgURL, setImgURL] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=63c39150&t=${"The Flash"}&type=${"movie"}`
        );
        const data = await response?.data;
        setContent(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, []);

  console.log(content);

  return (
    <main className="sm:max-w-screen-xl  mx-auto px-4">
      <Search />
      <Card content={content} loading={loading} />
    </main>
  );
}

export default App;
