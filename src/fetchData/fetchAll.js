async function fetchAll({ queryKey }) {
  const animal = queryKey[1];
  const location = queryKey[2];
  const breed = queryKey[3];

  //   const [, animal, location, breed] = queryKey;

  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!res.ok) {
    throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`);
  }

  return res.json();
}

export default fetchAll;
