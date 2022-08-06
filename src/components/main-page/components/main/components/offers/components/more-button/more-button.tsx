import "./style.css";

type MoreButtonProps = {
  handleMoreButtonClick: () => void;
};

function MoreButton({ handleMoreButtonClick }: MoreButtonProps) {
  return (
    <button
      type="button"
      className="more-button"
      onClick={handleMoreButtonClick}
    >
      Показать еще 5 билетов!
    </button>
  );
}

export default MoreButton;
