import { CinemasCard } from "../components/Card";
import { cinemas } from "../data/Data";

const Cinemas = () => {
  return (
    <div class="cinemas">
      <h2>Trending Cinemas</h2>
      <div class="cinemas-list">
        <For each={cinemas}>{(item) => <CinemasCard cinema={item} />}</For>
      </div>
    </div>
  );
};

export default Cinemas;
