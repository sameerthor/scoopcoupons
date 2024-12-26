import Link from "next/link";
import axios from 'axios';


export default function Header() {

    return (
        <>
            <div class="container-fluid nav-box">
                <nav class="container navbar navbar-expand-lg bg-body-light" id="top">
                    <div class="container-fluid">

                        <button class="navbar-toggler mr-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <a class="navbar-brand" href="./index.html">Scoop<span>Coupons</span></a>
                        <form id="searchform" class="d-flex ms-auto" role="search">
                            <input id="form-control" type="search" placeholder="Search  for stores ...." aria-label="Search" />
                            <button id="searchbtn" type="submit">SEARCH</button>
                        </form>
                        <div class="collapse navbar-collapse" id="navbarScroll">
                            <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="./index.html">HOME</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./store.html">STORES</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="caregories.html">CATEGORIES</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        BLOGS
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="./allblogs.html">BLOGS</a></li>
                                        <li><a class="dropdown-item" href="./blogs.html">CBD Oils</a></li>
                                        <li><a class="dropdown-item" href="./blogs.html">Books</a></li>
                                        <li><a class="dropdown-item" href="./blogs.html">Fancy Workouts</a></li>
                                        <li><a class="dropdown-item" href="./blogs.html">Jeans</a></li>
                                        <li><a class="dropdown-item" href="./blogs.html">Trending Article</a></li>
                                        <li><a class="dropdown-item" href="./blogs.html">Healthcare</a></li>
                                        <li><a class="dropdown-item" href="./blogs.html">Technology</a></li>
                                        <li><a class="dropdown-item" href="./blogs.html">Skincare</a></li>
                                        <li><a class="dropdown-item" href="./blogs.html">Seeds</a></li>
                                        <li><a class="dropdown-item" href="./blogs.html">Shampoos</a></li>
                                        <li><a class="dropdown-item" href="./blogs.html">Lifestyle</a></li>
                                        <li><a class="dropdown-item" href="./blogs.html">Pet CBD</a></li>
                                        <li><a class="dropdown-item" href="./blogs.html">Home Product</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )

}
