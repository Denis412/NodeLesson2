const fetchTodos = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

module.exports = fetchTodos;
