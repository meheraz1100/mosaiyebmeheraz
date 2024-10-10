import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meheraz  ",
  description: `Mosaiyeb Meheraz is a mern stack developer. Meheraz is a front-end web developer with a strong skill set that includes HTML, CSS, JavaScript, ReactJS, TailwindCSS, Git, GitHub, NodeJS, MongoDB, and ExpressJS. Meheraz regularly works with various tools like npm, Visual Studio Code, ESLint, Prettier, Redux, Jest, React Testing Library, Webpack, and Material-UI. Meheraz's projects often involve using JavaScript-based stacks, and one of the notable projects, 'EmployEase,' is available on GitHub.
  Meheraz is preparing for the ICPC International Collegiate Programming Contest and building a healthcare provider website. Meheraz is also working on a personal portfolio webpage that will feature all projects, using advanced animations, a minimalistic design, and responsive layouts. The portfolio will be deployed on GitHub Pages. Alongside professional work, Meheraz maintains a Facebook page to protest corruption at Feni Computer Institute and share memes.
  Meheraz is looking for opportunities in tech companies, where skills in both front-end and mern-stack development can be leveraged to work with a talented team. Meheraz is interested in advancing spoken English and has been involved in the socio-political movements in Bangladesh, such as the quota reform movement.`
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        strategy="lazyOnload"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NRS9PX9R2K"
      ></Script>
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-NRS9PX9R2K');
        `}
      </Script>
      <SmoothScroll />
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
