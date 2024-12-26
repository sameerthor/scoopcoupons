import Link from "next/link";
import axios from "axios";
import { useState, useCallback } from "react";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounce function to delay the API call
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  // Parse the image HTML string to extract `src` and `alt`
  const parseImage = (imageString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(imageString, "text/html");
    const img = doc.querySelector("img");
    return {
      src: img?.getAttribute("src") || "",
      alt: img?.getAttribute("alt") || "",
      width: img?.getAttribute("width") || "200",
      height: img?.getAttribute("height") || "43",
    };
  };

  // Fetch search results from API
  const fetchSearchResults = async (term) => {
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const apiUrl = `https://scoopcoupons.com/wp-admin/admin-ajax.php`;
      const params = {
        ajax_sc: "t",
        action: "wpcoupon_coupon_ajax_search",
        s: term,
        _: Date.now(),
      };

      const response = await axios.get(apiUrl, { params });

      if (response.data.success) {
        setSearchResults(response.data.results);
      } else {
        setError("No results found.");
        setSearchResults([]);
      }
    } catch (err) {
      console.error("Search error:", err);
      setError("An error occurred while searching. Please try again.");
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Debounced search function
  const debouncedFetchSearchResults = useCallback(debounce(fetchSearchResults, 300), []);

  // Handle input change and trigger search
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedFetchSearchResults(term);
  };

  // Redirect to the URL of the selected search result
  const handleSelectResult = (url) => {
    window.location.href = url;
  };

  return (
    <header>
      <div className="container-fluid nav-box">
        <nav className="container navbar navbar-expand-lg bg-body-light" id="top">
          <div className="container-fluid">
            <button
              className="navbar-toggler mr-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link href="/" className="navbar-brand">
              Scoop<span>Coupons</span>
            </Link>
            <form
              id="searchform"
              className="d-flex ms-auto position-relative"
              role="search"
              onSubmit={(e) => e.preventDefault()} // Prevent form submission
            >
              <input
                id="form-control"
                type="search"
                placeholder="Search for stores ...."
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                className="form-control me-2"
              />
              <button id="searchbtn" type="submit" className="btn btn-outline-success">
                SEARCH
              </button>
              {/* Search Results */}
              {loading && (
                <div className="results items ui transition visible position-absolute bg-white border mt-2 p-2" style={{ zIndex: 1000, width: "100%" }}>
                  <p>Loading...</p>
                </div>
              )}
              {!loading && error && (
                <div className="results items ui transition visible position-absolute bg-white border mt-2 p-2" style={{ zIndex: 1000, width: "100%" }}>
                  <p>{error}</p>
                </div>
              )}
              {!loading && searchResults.length > 0 && (
                <div className="results items ui transition visible position-absolute bg-white border mt-2 p-2" style={{ zIndex: 1000, width: "100%" }}>
                  {searchResults.map((result) => {
                    const { src, alt, width, height } = parseImage(result.image);
                    return (
                      <div
                        key={result.id}
                        className="result d-flex align-items-center mb-2"
                        onClick={() => handleSelectResult(result.url)} // Redirect on click
                        style={{ cursor: "pointer" }}
                      >
                        <div className="d-flex align-items-center">
                          <img
                            src={src}
                            alt={alt}
                            width={width}
                            height={height}
                            className="me-2"
                          />
                          <div className="content">
                            <div className="title">{result.title}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </form>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul
                className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"
                style={{ "--bs-scroll-height": "100px" }}
              >
                <li className="nav-item">
                  <Link href="/" className="nav-link">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/store" className="nav-link">
                    STORES
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/categories" className="nav-link">
                    CATEGORIES
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    BLOGS
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/allblogs" className="dropdown-item">
                        BLOGS
                      </Link>
                    </li>
                    <li>
                      <Link href="/blogs/cbd-oils" className="dropdown-item">
                        CBD Oils
                      </Link>
                    </li>
                    <li>
                      <Link href="/blogs/books" className="dropdown-item">
                        Books
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
