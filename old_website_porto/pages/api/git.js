import axios from "axios";

// Get all of my repositories from github
export default async (req, res) => {
  const { data } = await axios.get("https://api.github.com/users/Bass4Nation/repos", {
    headers: { Accept: "application/json" },
  });

  res.status(200).json(data);
};