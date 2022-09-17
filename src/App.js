import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.warn(error));
  };

  const getAsyncUsers = async () => {
    try {
      const fetchData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const res = await fetchData.json();
      setUsers(res);
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(() => {
    // getUsers()s
    getAsyncUsers();
  }, []);

  const filterSearchData = users.filter((user) => {
    return Object.values(user)
      .join("")
      .toLocaleLowerCase()
      .includes(searchQuery.toLocaleLowerCase());
  });

  // const debouncedSearch = (fn, delay) => {
  //   let timer;
  //   return function () {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       fn();
  //     }, delay);
  //   };
  // };
  // const reqOp = debouncedSearch(filterSearchData, 1000);

  useEffect(() => {
    if (searchQuery) {
      const dSearch = setTimeout(() => {
        setSearch(filterSearchData);
      }, 500);
      return () => clearTimeout(dSearch);
    } else setUsers(users);
  }, [searchQuery]);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="App">
      <h1>hay</h1>
      <input
        className=" search"
        type="text"
        placeholder="search user"
        onChange={ handleSearchQuery }
      />
      <div className="grid-main">
        { searchQuery.length > 0
          ? search.map((searchData) => {
            return (
              <div className="child">
                <h2>{ searchData.name }</h2>
                <p>{ searchData.username }</p>
              </div>
            );
          })
          : users.map((item, idx) => (
            <div className="child" key={ idx }>
              <h2>{ item.name }</h2>
              <p>{ item.username }</p>
            </div>
          )) }
      </div>
    </div>
  );
}

export default App;
