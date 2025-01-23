import BusinessPolicyCard from "../components/BusinessPolicyCard";

const BusinessPolicy = () => {
    return (
        <section className="space-y-[40px] lg:space-y-[50px] py-[50px] lg:py-[120px] bg-[url(/images/home-page/dot-bg-results.svg)] bg-auto font-noto relative px-4">

            <h2 className="font-black text-3xl lg:text-6xl text-[#D51A16] text-center">ハディスの営業ポリシー</h2>

            <div className="flex items-center justify-center pt-[40px] lg:pt-[50px] flex-col gap-6 lg:gap-8">
                <BusinessPolicyCard title="営業ポリシー" char="壱" content="しつこい勧誘は一切行いません" />
                <BusinessPolicyCard title="営業ポリシー" char="弍" content="安全で丁寧な作業をいたします" />
                <BusinessPolicyCard title="営業ポリシー" char="参" content="個人情報保護を徹底いたします" />
            </div>
        </section>
    )
};

export default BusinessPolicy;
