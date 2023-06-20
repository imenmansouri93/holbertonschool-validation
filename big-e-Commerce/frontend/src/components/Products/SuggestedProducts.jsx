import React, { useEffect, useState } from "react";
import { productData } from "../../static/data";
import styles from "../../styles/styles";

const SuggestedProducts = ({ data }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const d =
      productData && productData.filter((i) => i.category === data.category);
    setProducts(d);
  }, []);

  return (
    <div>
      {data ? (
        <div className={`p-4 ${styles.section}`}>
          <h2
            className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}
          >
            Related Product
          </h2>
        </div>
      ) : null}
    </div>
  );
};

export default SuggestedProducts;
