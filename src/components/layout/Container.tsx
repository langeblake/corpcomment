import { TFeedbackItem } from "../../libs/types";
import FeedbackList from "../feedback/FeedbackList";
import Header from "../layout/Header";

type ContainerProps = {
  feedbackItems: TFeedbackItem[];
  loading: boolean;
  errorMessage: string;
  handleAddToList: (text: string) => void;
};

export default function Container({
  feedbackItems,
  loading,
  errorMessage,
  handleAddToList,
}: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        feedbackItems={feedbackItems}
        loading={loading}
        errorMessage={errorMessage}
      />
    </main>
  );
}
