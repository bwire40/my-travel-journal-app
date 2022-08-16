/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import IMG from "../images/forest.jpg";
function Contents(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.item.imageUrl} />
      </div>
      <div className="card-content">
        <p>
          <i>
            <small>{props.item.location}</small>
          </i>{" "}
          <span>
            <small>
              <a href={props.item.googleUrl}> {props.item.googleUrl}</a>
            </small>
          </span>
        </p>
        <h1>{props.item.title}</h1>
        <p>
          <small>
            {props.item.startDate}&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <span>{props.item.endDate}</span>
          </small>
        </p>

        <p>{props.item.description}</p>
      </div>
    </div>
  );
}

export default Contents;
