export const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
    cache: "no-store",
  });
  const promise = new Promise((res, reject) => {
    setTimeout(() => res("good"), 3000);
  });
  await promise;
  return res.json();
};

export default async function Page() {
  const data = await getData();
  const comments = data.splice(1, 12);

  return (
    <div>
      <h2>fetching Page</h2>
      {comments.map((el) => (
        <div
          key={el.postId}
          style={{
            border: "1px solid grey",
            padding: "8px",
            marginTop: "10px",
          }}
        >
          <h4>{el.name}</h4>
          <p>{el.body}</p>
        </div>
      ))}
    </div>
  );
}
