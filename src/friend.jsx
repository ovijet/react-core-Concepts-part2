export default function Friend({ friend }) {
  // console.log(friend);
  let { name, email } = friend;
  return (
    <>
      <h2>Name: {name}</h2>

      <h2>Email: {email}</h2>
    </>
  );
}
