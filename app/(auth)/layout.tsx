import Image from "next/image";
import Link from "next/link";

const AuthLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link href={"/"} className="auth-logo flex items-center">
          <Image
            src={"/assets/icons/logo.svg"}
            alt="logo"
            width={140}
            height={32}
            className="h-8 w-auto rotate-90"
          />
          <p className="text-xl font-bold tracking-wider">erto</p>
        </Link>

        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>

      <section className="auth-right-section">
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote className="auth-blockquote">
            Verto&apos;s real-time AI insights have completely transformed the
            way I learn stocks. I feel more confident and informed with every
            decision!
          </blockquote>

          <div className="flex items-center justify-between">
            <div>
              <cite className="auth-testimonial-author">- John M.</cite>
              <p className="max-md:text-xs text-gray-500">Retail Investor</p>
            </div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Image
                  src={"/assets/icons/star.svg"}
                  alt="star"
                  key={star}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <Image
            src={"/assets/images/dashboard-2.png"}
            alt="dashboard-preview"
            width={1440}
            height={1150}
            className="auth-dashboard-preview absolute top-0"
          />
        </div>
      </section>
    </main>
  );
};
export default AuthLayout;
