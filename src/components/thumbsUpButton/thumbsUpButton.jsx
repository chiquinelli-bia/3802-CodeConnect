import { IconButton } from "../iconButton";
import { Spinner } from "../spinner";
import { IconThumbsUp } from "../../img/icons/IconThumbsUp";

export const ThumbsUpButton = ({ loading }) => {
  return (
    <IconButton disabled={loading}>
      {loading ? <Spinner /> : <IconThumbsUp />}
    </IconButton>
  );
};
