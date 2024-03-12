import { Footer, Header } from "./components";


export const Layout: React.FC = ({ children }) => (
  <div>
    <Header />
    <main style={{ margin: 20 }}>{children}</main>
    <Footer />
  </div>
);
