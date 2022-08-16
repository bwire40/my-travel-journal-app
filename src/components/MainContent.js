import Contents from "./Contents.js";
import data from "./data.js";

function MainContent() {
  const mapped_data = data.map((item) => {
    return <Contents key={item.id} item={item} />;
  });
  return <div className="card-section">{mapped_data}</div>;
}
export default MainContent;
