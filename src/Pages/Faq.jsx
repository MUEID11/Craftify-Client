const Faq = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 w-full">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What are some beginner-friendly craft projects to try?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Beginner-friendly craft projects include simple activities like
                paper crafting (origami, card-making), painting (acrylic or
                watercolor), knitting or crocheting, and DIY home decor projects
                (candle-making, terrariums).
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How can I improve my crafting skills?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Improving crafting skills involves practicing regularly, seeking
                inspiration from various sources (books, online tutorials,
                workshops), experimenting with new techniques and materials, and
                joining crafting communities or clubs to learn from others.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What are some eco-friendly crafting materials and practices?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Eco-friendly crafting materials include recycled paper, fabric
                scraps, natural dyes, organic yarn, and sustainably sourced
                wood. Practices such as reducing waste, upcycling old items, and
                using non-toxic adhesives and paints also contribute to
                eco-friendly crafting.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How do I price my handmade crafts for sale?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Pricing handmade crafts involves considering factors such as the
                cost of materials, labor (time spent crafting), overhead
                expenses (e.g., equipment, packaging), and market demand.
                Researching similar products in the market and calculating a
                fair profit margin can help determine the selling price.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What are some ways to monetize my crafting skills?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Monetizing crafting skills can be done through various avenues
                such as selling handmade crafts online (e.g., Etsy, Shopify),
                participating in craft fairs or markets, offering crafting
                workshops or classes, collaborating with local businesses, and
                freelance crafting services (e.g., custom orders, event decor).
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
