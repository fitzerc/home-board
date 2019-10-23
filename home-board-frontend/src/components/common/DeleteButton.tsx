import React from "react";

interface Props {
  deleteClicked: () => void;
}

const DeleteButton: React.FunctionComponent<Props> = ({ deleteClicked }) => {
  return (
    <button type="button" className="close" onClick={deleteClicked}>
      <span aria-hidden="true">&times;</span>
    </button>
  );
};

export default DeleteButton;
