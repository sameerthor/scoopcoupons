import { useState } from "react";
import Link from "next/link";
import "@/styles/a-z-store.css";
import { NextSeo } from "next-seo";
import moment from "moment";
export default function Stores({ initialStoreData }) {
    const [storeData, setStoreData] = useState(initialStoreData);
    const [pageNumbers, setPageNumbers] = useState(
        Object.keys(initialStoreData).reduce((acc, key) => ({ ...acc, [key]: 1 }), {})
    );
    const [loading, setLoading] = useState({});
    const [hasMore, setHasMore] = useState(
        Object.keys(initialStoreData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

    const alphabets = ["0-9", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))];

    const handleLoadMore = async (letter) => {
        if (!hasMore[letter]) return;

        setLoading((prev) => ({ ...prev, [letter]: true }));
        try {
            const nextPage = pageNumbers[letter] + 1;
            const response = await fetch("https://scoopcoupons.com/wp-json/custom/v1/get-stores", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    letter: letter.toUpperCase(),
                    offset: (nextPage - 1) * 12,
                }),
            });

            const result = await response.json();

            if (!result.success || result.data.length === 0) {
                setHasMore((prev) => ({ ...prev, [letter]: false }));
            } else {
                setStoreData((prev) => ({
                    ...prev,
                    [letter]: [...prev[letter], ...result.data],
                }));
                setPageNumbers((prev) => ({ ...prev, [letter]: nextPage }));
            }
        } catch (error) {
            console.error(`Error loading more stores for ${letter}:`, error);
        } finally {
            setLoading((prev) => ({ ...prev, [letter]: false }));
        }
    };

    const calculateCoupons = (offers) => {
        const saleCount = offers.sale || 0;
        const codeCount = offers.code || 0;
        const saleText = saleCount > 0 ? `${saleCount} sale${saleCount > 1 ? "s" : ""}` : "";
        const codeText = codeCount > 0 ? `${codeCount} code${codeCount > 1 ? "s" : ""}` : "";
        return [saleText, codeText].filter(Boolean).join(" & ");
    };

    return (
        <>
            <NextSeo
                title={`All Stores for ${moment().format("MMMM YYYY")}`}
                description="Scoopcoupons offers coupons for over 1 lakh stores. All the coupons and deals have been verified by the team."
            />
            <section className="allStorePage">
                <div className="container">
                    <div className="storeBox">
                        <div className="alpha-store">
                            <h1 className="text-center">All Stores</h1>
                            <div>
                                <p className="all_list">
                                    {alphabets.map((c) => (
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const target = document.querySelector(`#alpha${c.toUpperCase()}`);
                                                if (target) {
                                                    window.scrollTo({
                                                        top: target.offsetTop - 30,
                                                        behavior: "smooth",
                                                    });
                                                }
                                            }}
                                            className="getStore"
                                            aria-label={`Scroll to ${c.toUpperCase()} section`}
                                            key={c}
                                        >
                                            {c.toUpperCase()}
                                        </button>
                                    ))}
                                </p>
                            </div>

                            {Object.keys(storeData).map((c) => (
                                <div className="storeList" id={`alpha${c.toUpperCase()}`} key={c}>
                                    <ul>
                                        {storeData[c].map((item, index) => (
                                            <li key={index}>
                                                <Link href={`https://scoopcoupons.com/store/${item.slug}`}>
                                                    {item.name}
                                                    <span>{calculateCoupons(item.offer_count)}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    {hasMore[c] && (
                                        <div className="loadMoreCoupon text-center">
                                            <button
                                                onClick={() => handleLoadMore(c)}
                                                disabled={loading[c] || !hasMore[c]}
                                                aria-live="polite"
                                                className="load-more-btn"
                                            >
                                                {loading[c] ? "Loading..." : "Load More"}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getStaticProps() {
    const alphabets = ["0-9", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))];
    const storeData = {};

    try {
        const responses = await Promise.all(
            alphabets.map((letter) =>
                fetch("https://scoopcoupons.com/wp-json/custom/v1/get-stores", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        letter: letter.toUpperCase(),
                        offset: 0,
                    }),
                })
                    .then((res) => res.json())
                    .then((data) => ({ [letter]: data.success ? data.data : [] }))
            )
        );

        responses.forEach((response) => {
            Object.assign(storeData, response);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return {
        props: {
            initialStoreData: storeData,
        },
        revalidate: 60,
    };
}
