/* eslint-disable import/no-anonymous-default-export */
import IMG1 from "../images/forest.jpg";
import IMG2 from "../images/mtboku.jpg";
import IMG3 from "../images/rolands.jpg";

let start = new Date("8 23 2022");
let end = new Date("9 10 2022");
export default [
  {
    id: 1,
    title: "Rain Forest Walk",
    location: "mt. Everest",
    googleUrl: "www.google.com",
    startDate: start.toDateString(),
    endDate: end.toDateString(),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
    vulputate lorem. Duis elementum ligula venenatis dignissim mollis.
    Suspendisse ultrices vulputate quam. Phasellus gravida, urna et
    malesuada rutrum, risus libero auctor nisl, sed facilisis libero purus
    faucibus lectus. Fusce ante dui, rhoncus eget lectus eu, suscipit
    volutpat nunc. Mauris mattis massa nec erat vehicula mattis. In at
    ullamcorper justo. Donec convallis tellus ac quam eleifend tincidunt.
    Nunc eu nisi non enim convallis pellentesque non sed nisl.`,
    imageUrl: { IMG1 }.IMG1,
  },
  {
    id: 2,
    title: "Rolands Next",
    location: "Rolands",
    googleUrl: "www.google.com",
    startDate: start.toDateString(),
    endDate: end.toDateString(),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
    vulputate lorem. Duis elementum ligula venenatis dignissim mollis.
    Suspendisse ultrices vulputate quam. Phasellus gravida, urna et
    malesuada rutrum, risus libero auctor nisl, sed facilisis libero purus
    faucibus lectus. Fusce ante dui, rhoncus eget lectus eu, suscipit
    volutpat nunc. Mauris mattis massa nec erat vehicula mattis. In at
    ullamcorper justo. Donec convallis tellus ac quam eleifend tincidunt.
    Nunc eu nisi non enim convallis pellentesque non sed nisl.`,
    imageUrl: { IMG3 }.IMG3,
  },
  {
    id: 3,
    title: "Mount Boku",
    location: "mt boku",
    googleUrl: "www.google.com",
    startDate: start.toDateString(),
    endDate: end.toDateString(),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
    vulputate lorem. Duis elementum ligula venenatis dignissim mollis.
    Suspendisse ultrices vulputate quam. Phasellus gravida, urna et
    malesuada rutrum, risus libero auctor nisl, sed facilisis libero purus
    faucibus lectus. Fusce ante dui, rhoncus eget lectus eu, suscipit
    volutpat nunc. Mauris mattis massa nec erat vehicula mattis. In at
    ullamcorper justo. Donec convallis tellus ac quam eleifend tincidunt.
    Nunc eu nisi non enim convallis pellentesque non sed nisl.`,
    imageUrl: { IMG2 }.IMG2,
  },
];
