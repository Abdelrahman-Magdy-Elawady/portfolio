import { HomePage } from "./pages";
import ReactLenis from "lenis/react";
import { useGsapRefresh } from "./hooks";
export default function App() {
  useGsapRefresh();
  return (
    <ReactLenis root>
      <HomePage />
    </ReactLenis>
  );
}
