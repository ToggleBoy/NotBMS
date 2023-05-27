import { CinemasCard } from "../components/Card";

const Cinemas = () => {
  const item = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div class="cinemas">
      <h2>Trending Cinemas</h2>
      <div class="cinemas-list">
        <For each={item}>{(item) => <CinemasCard id={item} />}</For>
      </div>
    </div>
  );
};

export default Cinemas;
