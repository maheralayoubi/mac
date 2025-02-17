interface IPurchaseItemsCategoryCardProps {
  title: string;
  activeCategory: string;
  changeCategory: (title: string) => void;
}

const PurchaseItemsCategoryCard = ({
  title,
  activeCategory,
  changeCategory,
}: IPurchaseItemsCategoryCardProps) => {
  
  const handleCategoryClick = () => {
    changeCategory(title);

    // Scroll only for small screens
    if (window.matchMedia("(max-width: 600px)").matches) {
      document.getElementById("scroll-to-items")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={`
        relative w-fit md:max-w-[27%] min-w-[290px] lg:min-w-[360px]
        px-[16px] py-[11px] lg:p-[15px] text-center text-[14px] lg:text-[18px] 
        leading-[18px] lg:leading-[24px] font-noto font-semibold border-[2px]
        ${activeCategory === title
          ? "border-[#990E1C] text-white gradient-red text-shadow-red"
          : "text-[#111111] bg-white bg-[url(/images/home-page/doted-bg-btn.svg)] bg-cover border-[#111111]"
        }
      `}
      onClick={handleCategoryClick}
    >
      {title}
    </button>
  );
};

export default PurchaseItemsCategoryCard;
