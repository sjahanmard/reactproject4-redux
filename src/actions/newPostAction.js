import { NEW_POST } from "./types";

export const createPost = (postData) => async (dispatch) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  const data = await res.json().then((data) =>
    dispatch({
      type: NEW_POST,
      payload: data,
    })
  );

  console.log(data);
};
