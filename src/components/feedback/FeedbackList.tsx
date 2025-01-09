import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { TFeedbackItem } from "../../libs/types";

type FeedbackListProps = {
  feedbackItems: TFeedbackItem[];
  loading: boolean;
  errorMessage: string;
};

export default function FeedbackList({
  feedbackItems,
  loading,
  errorMessage,
}: FeedbackListProps) {
  return (
    <ol className="feedback-list">
      {loading && <Spinner />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
