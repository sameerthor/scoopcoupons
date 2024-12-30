import Image from "next/image";
import Link from "next/link";
import "@/styles/store-cat.css";
import moment from "moment";
import { NextSeo } from "next-seo";
import { decode } from "he";


export default function CategoriesPage({ categories, merchants }) {
    return (
        <>
            <NextSeo
                title="Categories"
                description="Select any category and get exclusives coupons on every stores."
            />
            <section className="allCategories">
                <div className="container">
                    <div className="row allCatBox">
                        <div className="col-lg-9 p-0">
                            <div className="row row-cols-2">
                                {categories.map((item, index) => (
                                    <div className="col-md-3 col-sm-6 category-box" key={index}>
                                        <div className="category-item">
                                            <div className="cat-img">
                                                <Link href={`https://scoopcoupons.com/coupon-category/${item.slug}`}>
                                                    <img
                                                        src={'https://scoopcoupons.com/wp-content/uploads/category/'+item.slug+'.png'}
                                                        alt={decode(item.name)}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="category-title">
                                                <Link href={`https://scoopcoupons.com/coupon-category/${item.slug}`}>
                                                    {decode(item.name)}
                                                    <span>
                                                        {item.offers.code > 0 && `${item.offers.code} Coupons`}
                                                        {item.offers.code > 0 && item.offers.sale > 0 && " | "}
                                                        {item.offers.sale > 0 && `${item.offers.sale} Deals`}
                                                    </span>
                                                </Link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 p-0">
                            <div className="catSidebar">
                                <div className="sidebarWidget catDesc">
                                    <div className="catHeading">
                                        <h2>All Categories</h2>
                                    </div>
                                    <div className="catValue">
                                        <p>Total Categories:</p>
                                        <h4>{categories.length} +</h4>
                                        <p>Total Coupons &amp; Offers:</p>
                                        <h4>
                                            {categories.reduce((total, current) => total + current.count, 0)} +
                                        </h4>
                                    </div>
                                    <div className="verifiedBox">
                                        <p className="text-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="#b9dc2f"
                                                width={16}
                                                height={16}
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                            </svg>
                                            Verified On: {moment().format("dddd, Do MMMM YYYY")}
                                        </p>
                                    </div>
                                </div>
                                <div className="sidebarWidget">
                                    <h2>Popular Merchants</h2>
                                    <ul>
                                        {merchants.map((merchant, index) => (
                                            <li key={index}>
                                                <Link href={`https://scoopcoupons.com/store/${merchant.slug}`}>
                                                    {decode(merchant.name)}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getStaticProps() {
    // Fetch categories
    const categoryRes = await fetch(`https://scoopcoupons.com/wp-json/custom/v1/get-categories`);
    const categoryData = await categoryRes.json();
    const categories = categoryData.data;

    // Fetch merchants for all letters in parallel
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    const merchantPromises = letters.map((letter) =>
        fetch(`https://scoopcoupons.com/wp-json/custom/v1/get-stores`, {
            method: 'POST',
            body: new URLSearchParams({ letter, offset: "0" }),
        }).then((res) => res.json())
    );

    const merchantResponses = await Promise.all(merchantPromises);
    const merchants = merchantResponses
        .filter((response) => response.success)
        .flatMap((response) => response.data);

    return {
        props: {
            categories,
            merchants,
        },
        revalidate: 60,
    };
}
