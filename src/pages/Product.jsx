import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { shoes } from "../data/shoes";

export default function Product() {
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);

  // URL params are strings, ids in the data are numbers.
  const product = shoes.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-50 px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <p className="text-gray-500">There is no product with id “{id}”.</p>
        <Link
          to="/catalog"
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
        >
          Back to catalog
        </Link>
      </main>
    );
  }

  // Main image first, then the rest of the gallery.
  const gallery = [product.image, ...product.images];
  const activeImage = gallery[activeIndex] ?? product.image;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          to="/catalog"
          className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 transition hover:text-gray-900"
        >
          ← Back to catalog
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="aspect-square overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200">
              <img
                src={activeImage}
                alt={`${product.brand} ${product.model}`}
                className="h-full w-full object-cover"
              />
            </div>

            {gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {gallery.map((src, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show photo ${index + 1}`}
                    className={`aspect-square overflow-hidden rounded-xl bg-white ring-2 transition ${
                      index === activeIndex
                        ? "ring-indigo-600"
                        : "ring-transparent hover:ring-gray-300"
                    }`}
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <span className="w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              {product.category}
            </span>

            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
              {product.brand}
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {product.model}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">
                {product.price} ₾
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  product.inStock
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {product.inStock ? "In stock" : "Sold out"}
              </span>
            </div>

            <p className="mt-6 leading-relaxed text-gray-600">
              {product.description}
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-gray-200 py-6">
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-500">
                  Size
                </dt>
                <dd className="mt-1 font-semibold text-gray-900">
                  EU {product.size}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-500">
                  Color
                </dt>
                <dd className="mt-1 font-semibold text-gray-900">
                  {product.color}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-500">
                  Category
                </dt>
                <dd className="mt-1 font-semibold text-gray-900">
                  {product.category}
                </dd>
              </div>
            </dl>

            <button
              type="button"
              disabled={!product.inStock}
              className="mt-8 w-full rounded-xl bg-gray-900 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-300 sm:w-auto"
            >
              {product.inStock ? "Add to cart" : "Out of stock"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
