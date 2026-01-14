function Tasks(props) {
  console.log(props);
  return (
    <ul className="space-y-4">
      {props.tasks.map((tasks) => (
        <li className="bg-slate-400 text-white p-2 rounded-md">
          {tasks.title}
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
