function Tasks(props) {
  console.log(props);
  return (
    <ul>
      {props.tasks.map((tasks) => (
        <li className="bg-slate-400 text-white p-2">{tasks.title}</li>
      ))}
    </ul>
  );
}

export default Tasks;
