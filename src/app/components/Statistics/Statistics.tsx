import "./Statistics.css";

const Statistics = () => {
  const statistics = [
    {
      id: 1,
      num: "25K+",
      referrence: "Active Students",
    },
    {
      id: 2,
      num: "899",
      referrence: "Total Courses",
    },
    {
      id: 3,
      num: "158",
      referrence: "Instructor",
    },
    {
      id: 4,
      num: "100%",
      referrence: "Satisfaction rate",
    },
  ];
  const cards = statistics.map((stats) => (
    <div className="col-lg-3 col-md-6" key={stats.id}>
      <div className="card">
        <h3>{stats.num}</h3>
        <p>{stats.referrence}</p>
      </div>
    </div>
  ));
  return (
    <div className="statistics">
      <div className="container">
        <div className="row">{cards}</div>
      </div>
    </div>
  );
};

export default Statistics;
